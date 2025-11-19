import { createContext, useContext, useState, useEffect } from "react";
import { Account, Client, ID } from "react-native-appwrite";

const client = new Client()
  .setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!)
  .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!);

const account = new Account(client);

const AuthContext = createContext(null);

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  // auto-login (check session)
  useEffect(() => {
    (async () => {
      try {
        const current = await account.get();
        setUser(current);
      } catch (e) {
        setUser(null);
      }
      setAuthLoading(false);
    })();
  }, []);

  const login = async (email:string, password:string) => {
    await account.createEmailPasswordSession(email, password);
    const u = await account.get();
    setUser(u);
  };

  const signup = async (email:string, password:string, name:string) => {
    await account.create(ID.unique(), email, password, name);
  };

  const logout = async () => {
    await account.deleteSession("current");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, authLoading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
