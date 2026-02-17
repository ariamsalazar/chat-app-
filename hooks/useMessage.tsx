"use client";

import { useCallback, useEffect, useState } from "react";
import { IMessage } from "../types/types";
import { fetchAllMessages, sendAMessage } from "../lib/API";
import { ERROR_SEND_MESSAGE, GENERAL_ERROR_CATCH } from "../constants/Message";

export function useMessages() {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [hasMoreMessage, setHasMoreMessage] = useState(false);

  // Function to load all messages from the API call
  const loadMessages = useCallback(async (after?: string) => {
    try {
      setLoading(true);
      const response = await fetchAllMessages(after);
      if (after) {
        setMessages((prev) => [...prev, ...response.messages]);
      } else {
        setMessages(response.messages);
      }
      setHasMoreMessage(response.hasMoreMessage);
      setLoading(false);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : GENERAL_ERROR_CATCH;
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  }, []);

  // Function to send a message to the API
  const addMessage = useCallback(async (message: string, author: string) => {
    const dataMessage = { message, author };
    try {
      const newMessageResponde = await sendAMessage(dataMessage);
      setMessages((prev) => [newMessageResponde, ...prev]);
      return newMessageResponde;
    } catch (err) {
      setError(err instanceof Error ? err.message : ERROR_SEND_MESSAGE);
      throw err;
    }
  }, []);

  useEffect(() => {
    loadMessages();
  }, [loadMessages]);

  return {
    messages,
    loading,
    error,
    hasMoreMessage,
    addMessage,
    loadMore: () => loadMessages(messages[messages.length - 1]?.timestamp),
    refresh: () => loadMessages(),
  };
}
