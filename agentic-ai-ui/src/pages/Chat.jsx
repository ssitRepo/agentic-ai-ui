import React, { useState } from 'react';
import ChatWindow from '../components/ChatWindow';
import ChatInput from '../components/ChatInput';
import mockResponses from '../data/mockChatData.json';
import { useOutletContext } from 'react-router-dom';

export default function Chat() {
  const { selectedAgent } = useOutletContext();
  const [messages, setMessages] = useState([]);

  const handleSend = (userInput) => {
    if (!selectedAgent) {
      alert('Please select an agent.');
      return;
    }

    const question = {
      id: Date.now() + '-q',
      type: 'question',
      content: userInput,
    };

    const agentResponses = mockResponses[selectedAgent] || [];
    const found = agentResponses.find(
      (item) => item.question.toLowerCase() === userInput.toLowerCase()
    );

    const response = {
      id: Date.now() + '-a',
      type: 'answer',
      content: found?.answer?.content || "Sorry, I don't understand.",
      cta: found?.answer?.cta || null,
    };

    setMessages((prev) => [...prev, question, response]);
  };

  const isEmpty = messages.length === 0;

  return (
    <div className={`flex flex-col h-full ${isEmpty ? 'justify-center' : ''}`}>
      <div
        className={`flex-1 overflow-auto px-4 ${
          isEmpty ? 'flex flex-col items-center justify-center text-center' : 'flex flex-col-reverse'
        }`}
      >
        <ChatWindow messages={messages} />
      </div>
      <div className={`border-t p-4 ${isEmpty ? 'w-full max-w-xl mx-auto' : ''}`}>
        <ChatInput onSend={handleSend} />
      </div>
    </div>
  );
}
