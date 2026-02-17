const CURRENT_USER_KEY = 'chat_current_user';
const DEFAULT_USER = 'You';

export const getCurrentUser = (): string => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(CURRENT_USER_KEY) || DEFAULT_USER;
  }
  return DEFAULT_USER;
};

export const setCurrentUser = (author: string): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(CURRENT_USER_KEY, author);
  }
};

export const isCurrentUser = (author: string): boolean => {
  const current = getCurrentUser();
  return author === current;
};
