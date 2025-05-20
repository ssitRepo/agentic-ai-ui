import React, { useState } from 'react';
import RefreshIcon from "../assets/RefreshIcon"; // Adjust the path if needed

export default function ChatInput({ onSend, disabled, onRefresh }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSend(input.trim());
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto px-4">
      <div
        className={`flex items-center rounded-2xl border px-4 py-2 shadow-sm ${
          disabled ? 'opacity-60 cursor-not-allowed' : ''
        }`}
        style={{
          backgroundColor: 'var(--chat-window-bg)',
          borderColor: 'var(--text-secondary)',
        }}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Message your agent..."
          className="flex-1 bg-transparent outline-none text-sm"
          style={{
            color: 'var(--text)',
          }}
          disabled={disabled}
        />

        {/* 🔄 Refresh button */}
        <button
          type="button"
          onClick={onRefresh}
          className="ml-2 p-2 rounded-md transition flex items-center justify-center"
          style={{
            backgroundColor: 'transparent',
            cursor: disabled ? 'not-allowed' : 'pointer',
          }}
          disabled={disabled}
          aria-label="Refresh"
        >
          <RefreshIcon color="var(--text-secondary)" />
        </button>

        {/* Send button */}
        <button
          type="submit"
          disabled={disabled || !input.trim()}
          className="ml-2 p-2 rounded-md transition flex items-center justify-center"
          style={{
            backgroundColor:
              disabled || !input.trim()
                ? 'var(--text-secondary)'
                : 'var(--primary)',
            cursor:
              disabled || !input.trim() ? 'not-allowed' : 'pointer',
          }}
          aria-label="Send"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
      </div>
    </form>
  );
}
