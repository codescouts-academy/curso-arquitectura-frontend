import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useAuthenticationUseCase } from "../../../infrastructure/adapter/useAuthenticationUseCase";
import { UserName } from "../../../domain/model/user";
import { useUserStorage } from "../../../infrastructure/services/UserStorageService";

export const useAuthViewModel = () => {
  const navigate = useNavigate();
  const { user } = useUserStorage();
  const authenticate = useAuthenticationUseCase();

  useEffect(() => {
    if (user) navigate("/");
  }, [navigate, user]);


  const [name, setName] = useState<UserName>("");
  const [email, setEmail] = useState<Email>("");
  const [loading, setLoading] = useState(false);

  const login = async (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();

    await authenticate.execute(name, email);
    setLoading(false);
  };

  return { login, name, email, setName, setEmail, loading };
};
