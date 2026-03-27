import { createContext, useContext } from 'react';

export const UserContext = createContext();

export function UserProvider({ children }) {
  const user = {
    name: 'Marie Joseph',
    borrowedCount: 2,
    plan: 'premium',
  };

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser doit être utilisé dans UserProvider');
  }
  return context;
}
