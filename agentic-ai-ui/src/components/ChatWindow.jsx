// src/components/ChatWindow.jsx
import React from 'react';
import CopyIcon from '../assets/CopyIcon'; // Import the CopyIcon component

export default function ChatWindow({ messages }) {
  const themedQuestionStyles =
    'bg-[var(--chat-user-bg)] text-[var(--chat-user-text)] text-right ml-auto';
  const themedAnswerStyles =
    'text-[var(--chat-agent-text)] text-left';  // No background for answers

  // Default welcome message when no chat exists
  if (!messages || messages.length === 0) {
    return (
      <div className="p-6 text-center text-sm text-[var(--text-secondary)]">
        <p className="mb-2">👋 Hello! I’m your Agentic assistant.</p>
        <p>Ask me anything or choose a perspective to begin.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4 overflow-y-auto max-h-[calc(100vh-150px)] hide-scrollbar">
      {/* Chat messages */}
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`p-3 rounded-lg w-max max-w-[500px] text-sm ${
            msg.type === 'question' ? themedQuestionStyles : themedAnswerStyles
          }`}
        >
          {/* Render message content with preserved formatting */}
          <div
            className="message-content"
            dangerouslySetInnerHTML={{ __html: msg.content }}
          />

          {/* Copy Button */}
          {msg.type === 'answer' && (
            <button
              onClick={() => navigator.clipboard.writeText(msg.content)}
              className="flex items-center gap-1 text-xs opacity-100 transition pt-1"
              title="Copy response"
            >
              <CopyIcon className="copy-icon" />
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
