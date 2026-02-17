import { formatDistanceToNow, format } from 'date-fns';

export const formatMessageTime = (timestamp: string): string => {
  try {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);

    if (diffInHours < 24) {
      return formatDistanceToNow(date, { addSuffix: true });
    }

    // Otherwise show formatted date
    return format(date, 'MMM d, h:mm a');
  } catch {
    return timestamp;
  }
};
