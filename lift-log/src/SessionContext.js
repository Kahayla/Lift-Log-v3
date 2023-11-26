import React, { createContext, useContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid"; // Import uuid for generating unique IDs

const SessionContext = createContext();

const initialState = {
  sessions: [],
};

const sessionReducer = (state, action) => {
  switch (action.type) {
    case "ADD_SESSION":
      const newSession = { ...action.payload };
      return { sessions: [...state.sessions, newSession] };
    case "UPDATE_SESSION":
      const updatedSessions = state.sessions.map((session) =>
        session.id === action.payload.id
          ? { ...session, ...action.payload.data }
          : session
      );
      return { sessions: updatedSessions };
    default:
      return state;
  }
};

export const SessionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(sessionReducer, initialState);

  return (
    <SessionContext.Provider value={{ state, dispatch }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error("useSession must be used within a SessionProvider");
  }
  return context;
};
