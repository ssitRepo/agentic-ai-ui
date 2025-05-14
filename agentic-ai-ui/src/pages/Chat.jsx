import React, { useState } from 'react';
import ChatWindow from '../components/ChatWindow';
import ChatInput from '../components/ChatInput';
import mockResponses from '../data/mockChatData.json';
import { useOutletContext } from 'react-router-dom';

export default function Chat() {
  const { selectedAgent} = useOutletContext();

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
    console.log('Question:', question);

    const agentResponses = mockResponses[selectedAgent] || [];
    const found = agentResponses.find(
      (item) => item.question.toLowerCase() === userInput.toLowerCase()
    );

    console.log('Found:', found);

    const response = {
      id: Date.now() + '-a',
      type: 'answer',
      content: found?.answer?.content || "Sorry, I don't understand.",
      cta: found?.answer?.cta || null,
    };

    setMessages((prev) => [...prev, question, response]);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-auto p-4">
        <ChatWindow messages={messages} />
      </div>
      <div className="border-t p-4">
        <ChatInput onSend={handleSend} />
      </div>
    </div>
  );
}
