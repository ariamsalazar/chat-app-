export interface IMessage {
    id: string;
    message: string;
    author: string;
    timestamp: string;
}

export interface IMessageResponse {
    messages: IMessage[];
    hasMoreMessage: boolean;
    nextAfter?: string;
}

export interface ICreateMessage {
    message: string;
    author: string;
}