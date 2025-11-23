import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8080;

// Serve static files (JS, CSS, etc.)
app.use(express.static(path.join(__dirname, 'dist'), { index: false }));

// Inject API key into HTML for all routes (SPA support)
app.get('*', (req, res) => {
  try {
    const htmlPath = path.join(__dirname, 'dist', 'index.html');
    
    if (!fs.existsSync(htmlPath)) {
      return res.status(404).send('index.html not found');
    }
    
    let html = fs.readFileSync(htmlPath, 'utf8');
    
    // Inject API key as a script tag in the head
    const apiKey = process.env.GEMINI_API_KEY || '';
    const script = `<script>window.__GEMINI_API_KEY__ = ${JSON.stringify(apiKey)};</script>`;
    html = html.replace('<head>', `<head>${script}`);
    
    res.send(html);
  } catch (error) {
    console.error('Error serving HTML:', error);
    res.status(500).send('Internal server error');
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`GEMINI_API_KEY is ${process.env.GEMINI_API_KEY ? 'SET' : 'NOT SET'}`);
}).on('error', (error) => {
  console.error('Server error:', error);
  process.exit(1);
});

