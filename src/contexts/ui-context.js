import { createContext, useContext, useReducer } from 'react';

const UiContext = createContext();

const actions = {
  start_new_conversation: 'start-a-new-conversation',
};

function uiReducer(state, action) {
  switch (action.type) {
    case actions.start_new_conversation: {
      return { ...state, users: [action.user, ...state.users] };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function UiProvider({ children }) {
  const [state, dispatch] = useReducer(uiReducer, { users: [] });

  const startANewConversation = user =>
    dispatch({ type: actions.start_new_conversation, user });

  const value = { state, startANewConversation };
  return <UiContext.Provider value={value}>{children}</UiContext.Provider>;
}

function useUi() {
  const context = useContext(UiContext);
  if (context === undefined) {
    throw new Error('useUi must be used within a UiProvider');
  }
  return context;
}

export { UiProvider, useUi };
