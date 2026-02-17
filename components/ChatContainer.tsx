"use client";

import { useMessages } from "@/hooks/useMessage";
import LoadingComponent from "./common/Loading";
import ErrorComponent from "./common/Error";
import ChatInputBar from "./ChatInputBar";
import ChatMessageList from "./ChatMessageList";

export default function ChatContainer() {
  const { messages, addMessage, loading, error } = useMessages();

  // Loading state component
  if (loading) {
    return <LoadingComponent />;
  }

  // Error state component
  if (error) {
    return <ErrorComponent error={error} />;
  }

  return (
    <div
      className="h-screen flex flex-col max-w-5xl mx-auto"
      style={{
        backgroundImage: "url(/assets/background-wallpaper.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Chat components UI */}
      <ChatMessageList messages={messages} />
      <ChatInputBar addMessage={addMessage} />
    </div>
  );
}
