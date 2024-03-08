import { axiosInstance } from "@/api";
import { ENV } from "@/env";
import { SignInRequest, SignUpRequest } from "@/types";
import { useState } from "react";

const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [isAuth, setIsAuth] = useState(false);

  const signIn = async (signInRequest: SignInRequest) => {
    setIsLoading(true);

    return await axiosInstance
      .post(`${ENV.BASE_API_URL}/auth/signIn`, signInRequest)
      .finally(() => setIsLoading(false));
  };

  const signUp = async (signUpRequest: SignUpRequest) => {
    setIsLoading(true);

    return await axiosInstance
      .post(`${ENV.BASE_API_URL}/auth/signUp`, signUpRequest)
      .finally(() => setIsLoading(false));
  };

  const signOut = () => {
    setIsAuth(false);
  };

  return {
    signIn,
    signOut,
    signUp,
    isLoading,
    isAuth,
  };
};

export default useAuth;
