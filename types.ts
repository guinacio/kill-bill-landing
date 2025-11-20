export interface Target {
  id: number;
  name: string;
  alias: string;
  status: 'ALIVE' | 'DEAD';
  description: string;
}

export interface ChatMessage {
  role: 'user' | 'hanzo';
  content: string;
}
