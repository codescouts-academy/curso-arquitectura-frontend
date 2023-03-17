import { AuthenticationService } from "@domain/services/AuthenticationService";
import { useAuth } from "../services/AuthenticationService";
import { useUserStorage } from "../services/UserStorageService";
import { AuthenticateUseCase } from "../../application/authenticate";


export const useAuthenticationUseCase = () => {
    const storage = useUserStorage();
    const auth: AuthenticationService = useAuth();

    return new AuthenticateUseCase(auth, storage);
};
