import { API_BASE_URL, API_MESSAGE_URL, API_TOKEN } from "../constants/Api";
import { ERROR_MESSAGES_FETCH, ERROR_SEND_MESSAGE } from "../constants/Message";
import { ICreateMessage, IMessage, IMessageResponse } from "../types/types";


export async function fetchAllMessages(after?: string, limit: number = 20): Promise<IMessageResponse> {
    const urlMessageAPI = new URL(`${API_BASE_URL}${API_MESSAGE_URL}`);

    if (after) {
        urlMessageAPI.searchParams.append('after', after);
    }
    urlMessageAPI.searchParams.append('limit', limit.toString());

    const response = await fetch(urlMessageAPI.toString(), {
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`,
      },
    });
    if (!response.ok) {
      throw new Error(ERROR_MESSAGES_FETCH);
    }

    const dataMsg = await response.json();
    // Transform the API response
    const messages: IMessage[] = dataMsg.map((msg: any) => ({
      id: msg._id,
      message: msg.message,
      author: msg.author,
      timestamp: msg.createdAt
    }));

    return {
      messages,
      hasMoreMessage: dataMsg.length === limit,
      nextAfter: messages[messages.length - 1]?.timestamp
    };
}

  export async function sendAMessage(data: ICreateMessage): Promise<IMessage> {
    const response = await fetch(`${API_BASE_URL}${API_MESSAGE_URL}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(ERROR_SEND_MESSAGE);
    }

    const dataMsg = await response.json();
    // Transform the API response 
    return {
      id: dataMsg._id,
      message: dataMsg.message,
      author: dataMsg.author,
      timestamp: dataMsg.createdAt
    };
  }