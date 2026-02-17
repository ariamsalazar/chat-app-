import { formatMessageTime } from "@/lib/formatTimestamp";
import { IMessage } from "@/types/types";

interface IChatMessageProps {
  message: IMessage;
  isCurrentUser: boolean;
}

export default function ChatMessage({
  message,
  isCurrentUser,
}: IChatMessageProps) {
  const dateFormat = formatMessageTime(message.timestamp);
  return (
    <div
      className={`flex mb-3 md:mb-4 ${isCurrentUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`
            rounded-md shadow-sm px-4 py-3 max-w-[85%] md:max-w-[70%] border border-gray-200 
            ${isCurrentUser ? "bg-yellow-message" : "bg-white"}
          `}
      >
        {!isCurrentUser && (
          <p className="text-xs md:text-sm font-semibold text-gray-300 mb-1">
            {message.author}
          </p>
        )}
        <p className="text-sm md:text-base text-gray-900 break-words">
          {message.message}
        </p>
        <p
          className={`text-xs text-gray-400 font-medium mt-1 ${isCurrentUser ? "text-right" : ""}`}
        >
          {dateFormat}
        </p>
      </div>
    </div>
  );
}
