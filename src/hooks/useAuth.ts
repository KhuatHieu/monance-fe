import { useState } from "react";

const useAuth = () => {
  const [isAuth, setIsAuth] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const signIn = () => {
    setIsLoading(true);
  };

  const signOut = () => {};

  return {
    isAuth,
    setIsAuth,
    signIn,
    signOut,
    isLoading,
  };
};

export default useAuth;
