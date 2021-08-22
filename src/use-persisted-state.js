import createPersistedState from 'use-persisted-state';

export const useUsers = createPersistedState('users');
export const useConversations = createPersistedState('conversations');
export const useMessages = createPersistedState('messages');
