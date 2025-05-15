import React from 'react';

export default function ChatWindow({ messages }) {
  const themedQuestionStyles =
  'bg-[var(--chat-user-bg)] text-[var(--chat-user-text)] text-right ml-auto';
const themedAnswerStyles =
  'bg-[var(--chat-agent-bg)] text-[var(--chat-agent-text)] text-left';


  // Default welcome message when no chat exists
  if (!messages || messages.length === 0) {
    return (
      <div className="p-6 text-center text-sm text-[var(--text-secondary)]">
        <p className="mb-2">👋 Hello! I’m your Agentic assistant.</p>
        <p>Ask me anything or choose a protocol to begin.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`p-3 rounded-lg max-w-xl text-sm ${
            msg.type === 'question' ? themedQuestionStyles : themedAnswerStyles
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
                  className="inline-block mt-1 text-[var(--primary)] underline hover:opacity-80 transition"
                >
                  {msg.cta.label}
                </a>
              ) : msg.cta.type === 'button' ? (
                <button
                  onClick={() =>
                    alert(`Performing action: ${msg.cta.action}`)
                  }
                  className="mt-1 px-3 py-1 bg-[var(--primary)] text-white rounded hover:opacity-90 transition"
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
