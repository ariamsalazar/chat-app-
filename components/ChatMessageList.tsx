"use client";

import { isCurrentUser } from "@/lib/currentUser";
import { IMessage } from "@/types/types";
import { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";

interface IChatMessageListProps {
  messages: IMessage[];
}

export default function ChatMessageList({ messages }: IChatMessageListProps) {
  const messagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto px-4 md:px-6 py-4 chat-scroll">
      {messages.length === 0 ? (
        <div className="flex items-center justify-center h-full">
          <p className="text-gray-500 text-center">
            No messages yet. Start a new conversation! 👋
          </p>
        </div>
      ) : (
        <>
          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              message={message}
              // Check is the user is current user
              isCurrentUser={isCurrentUser(message.author)}
            />
          ))}
          <div ref={messagesRef} />
        </>
      )}
    </div>
  );
}
