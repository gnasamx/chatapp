import { createContext, useContext, useReducer } from 'react';

const UiContext = createContext();

const actions = {
  start_new_conversation: 'start-a-new-conversation',
  add_me: 'add-me',
};

function uiReducer(state, action) {
  switch (action.type) {
    case actions.start_new_conversation: {
      return { ...state, users: [action.user, ...state.users] };
    }
    case actions.add_me: {
      return { ...state, me: action.me };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

const initialState = {
  users: [],
  me: {},
};

function UiProvider({ children }) {
  const [state, dispatch] = useReducer(uiReducer, initialState);

  const startANewConversation = user =>
    dispatch({ type: actions.start_new_conversation, user });

  const createAccount = me => dispatch({ type: actions.add_me, me });

  const value = { ...state, startANewConversation, createAccount };
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
