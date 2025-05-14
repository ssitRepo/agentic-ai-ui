// src/components/ChatWindow.jsx
import React from 'react';

export default function ChatWindow({ messages }) {
  return (
    <div className="space-y-4">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`p-3 rounded-lg max-w-xl ${
            msg.type === 'question'
              ? 'bg-blue-100 text-right ml-auto'
              : 'bg-gray-100 text-left'
          }`}
        >
          <p>{msg.content}</p>

          {/* CTA rendering for answers */}
          {msg.type === 'answer' && msg.cta && (
            <div className="mt-2">
              {msg.cta.type === 'link' ? (
                <a
                  href={msg.cta.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-1 text-blue-600 underline"
                >
                  {msg.cta.label}
                </a>
              ) : msg.cta.type === 'button' ? (
                <button
                  onClick={() => alert(`Performing action: ${msg.cta.action}`)}
                  className="mt-1 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  {msg.cta.label}
                </button>
              ) : null}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
