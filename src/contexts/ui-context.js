import { createContext, useCallback, useContext, useReducer } from 'react';
import { useUsers } from '../use-persisted-state';

const UiContext = createContext();

const initialState = {
  ctxUsers: [],
  ctxCurrentuser: {},
};

const actions = {
  set_initial_context: 'set_initial_context',
};

function UiReduce(state, { type, users = [], currentuser = '' }) {
  switch (type) {
    case actions.set_initial_context: {
      return {
        ...state,
        ctxCurrentuser: currentuser,
        ctxUsers: users.filter(user => user.id !== currentuser),
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${type}`);
    }
  }
}

function UiProvider({ children }) {
  const [state, dispatch] = useReducer(UiReduce, initialState);
  const [users] = useUsers();

  const setCtxCurrentuser = useCallback(
    currentuser => {
      dispatch({
        type: actions.set_initial_context,
        currentuser,
        users,
      });
    },
    [users]
  );
  const value = { ...state, setCtxCurrentuser };
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
