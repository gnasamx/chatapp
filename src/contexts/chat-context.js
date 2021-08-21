import { createContext, useContext, useReducer } from 'react';
import { UiContext } from './ui-context';

const ChatContext = createContext();

const actions = {
  new_message: 'new-message',
};

function ChatReducer(state, { type, message }) {
  const { me } = useContext(UiContext);
  console.log('ChatReducer: ', { me });

  switch (type) {
    case actions.new_message: {
      return {
        ...state,
        conversations: {
          ...state.conversations,
          [message.userId]: {
            ...state.conversations[message.userId],
            [me.id]: {
              type: message.type,
              text: message.text,
              sentAt: message.sentAt,
            },
          },
        },
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${type}`);
    }
  }
}

const initialState = {
  conversations: {},
};

function ChatProvider({ children }) {
  const [state, dispatch] = useReducer(ChatReducer, initialState);

  const sendANewMessage = message =>
    dispatch({ type: actions.new_message, message });

  const value = { ...state, sendANewMessage };
  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
}

function useChat() {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
}

export { ChatProvider, useChat };
