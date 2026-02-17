import { getCurrentUser } from "@/lib/currentUser";
import { useState } from "react";

interface IChatInputBarProps {
  addMessage: (message: string, author: string) => Promise<any>;
}

export default function ChatInputBar({ addMessage }: IChatInputBarProps) {
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!message.trim()) return;

    try {
      setSending(true);
      const response = await addMessage(message.trim(), getCurrentUser());
      setMessage("");
    } catch (error) {
      console.log("Failed to send message", error);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="input-form-bg p-2 md:p-6">
      <form
        onSubmit={handleSubmit}
        className="flex gap-2 md:gap-3 max-w-5xl mx-auto"
      >
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
          disabled={sending}
          className="flex-1 bg-white rounded-md px-4 py-2 md:py-3 text-sm md:text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={sending || !message.trim()}
          className="btn-send text-white font-semibold px-6 md:px-8 py-2 md:py-3 rounded-md transition-colors text-sm md:text-base"
        >
          {sending ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
}
