// src/components/ChatWindow.jsx
import React from "react";
import CopyIcon from "../assets/CopyIcon"; // Import the CopyIcon component

export default function ChatWindow({ messages }) {
  const themedQuestionStyles =
    "bg-[var(--chat-user-bg)] text-[var(--chat-user-text)] text-right ml-auto";
  const themedAnswerStyles = "text-[var(--chat-agent-text)] text-left"; // No background for answers

  if (!messages || messages.length === 0) {
    return (
      <div className="w-full max-w-3xl mx-auto px-4 py-6 text-center text-sm text-[var(--text-secondary)]">
        <p className="mb-2">👋 Hello! I’m your Agentic assistant.</p>
        <p>Ask me anything or choose a perspective to begin.</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-3xl mx-auto px-4 space-y-4 overflow-y-auto max-h-[calc(100vh-150px)] hide-scrollbar">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`p-3 rounded-lg w-max max-w-[500px] text-sm ${
            msg.type === "question" ? themedQuestionStyles : themedAnswerStyles
          }`}
        >
          <div
            className="message-content"
            dangerouslySetInnerHTML={{ __html: msg.content }}
          />

          {msg.type === "answer" && (
            <button
              onClick={() => {
                if (navigator.clipboard && window.isSecureContext) {
                  // Modern API (only works on HTTPS or localhost)
                  navigator.clipboard
                    .writeText(msg.content)
                    .then(() => {
                      console.log("Copied to clipboard");
                    })
                    .catch((err) => {
                      console.error("Clipboard API failed: ", err);
                      alert("Copy failed. Please try again.");
                    });
                } else {
                  // Fallback for HTTP (works by inserting a hidden textarea)
                  const textarea = document.createElement("textarea");
                  textarea.value = msg.content;
                  textarea.style.position = "fixed"; // Prevent scrolling
                  textarea.style.opacity = 0;
                  document.body.appendChild(textarea);
                  textarea.focus();
                  textarea.select();
                  try {
                    const success = document.execCommand("copy");
                    if (success) {
                      console.log("Fallback: copied successfully");
                    } else {
                      console.warn("Fallback: copy command failed");
                      alert("Copy failed. Please try again.");
                    }
                  } catch (err) {
                    console.error("Fallback error:", err);
                    alert("Copy failed. Please try again.");
                  }
                  document.body.removeChild(textarea);
                }
              }}
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
