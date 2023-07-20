import { User } from "firebase/auth";
import { Context, Dispatch, createContext } from "react";

export const initialUserState: User | null = null;

export type UserAction =
  | { type: "LOGIN"; payload: User }
  | { type: "LOGOUT"; payload: null };

export const userReducer = (
    state: User | null,
    action: UserAction
  ): User | null => {
    switch (action.type) {
      case "LOGIN":
        return action.payload;
      case "LOGOUT":
        return null;
      default:
        return state;
    }
  };

export const AuthContext: Context<User | null> = createContext<User | null>(null);
export const AuthDispatchContext: Context<Dispatch<UserAction> | null> = createContext<Dispatch<UserAction> | null>(null);