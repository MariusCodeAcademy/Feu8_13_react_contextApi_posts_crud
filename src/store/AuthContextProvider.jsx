import { createContext } from 'react';

export const AuthContext = createContext({
  email: '',
  token: '',
  isUserLoggedIn: false,
  // eslint-disable-next-line no-unused-vars
  login(email) {},
  logout() {},
});

AuthContext.displayName = 'Auth';

export default function AuthProvider(props) {
  const ctx = {
    token: 'asdasdasd',
  };
  return (
    <AuthContext.Provider value={ctx}>{props.children}</AuthContext.Provider>
  );
}
