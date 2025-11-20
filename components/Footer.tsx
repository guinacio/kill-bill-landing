import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-kb-black text-gray-500 py-12 text-center border-t border-gray-800 font-condensed">
      <div className="max-w-4xl mx-auto px-6">
        <p className="mb-4 uppercase tracking-widest text-sm">Written and Directed by You (with AI assistance)</p>
        <div className="flex justify-center space-x-6 mb-8">
           <span className="w-2 h-2 bg-kb-yellow rounded-full"></span>
           <span className="w-2 h-2 bg-kb-yellow rounded-full"></span>
           <span className="w-2 h-2 bg-kb-yellow rounded-full"></span>
        </div>
        <p className="text-xs opacity-50">
          This is a fan tribute. Kill Bill is a property of Miramax/A Band Apart.
        </p>
      </div>
    </footer>
  );
};

export default Footer;