// src/components/ChatInput.jsx
import React, { useState } from 'react';

export default function ChatInput({ onSend, disabled }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSend(input.trim());
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
        className="flex-1 rounded px-3 py-2 border"
        style={{
          backgroundColor: 'var(--chat-window-bg)',
          color: 'var(--text)',
          borderColor: 'var(--text-secondary)',
        }}
        disabled={disabled}
      />
      <button
        type="submit"
        disabled={disabled}
        className="px-4 py-2 rounded text-white"
        style={{
          backgroundColor: disabled ? 'var(--text-secondary)' : 'var(--primary)',
          cursor: disabled ? 'not-allowed' : 'pointer',
        }}
      >
        Send
      </button>
    </form>
  );
}
