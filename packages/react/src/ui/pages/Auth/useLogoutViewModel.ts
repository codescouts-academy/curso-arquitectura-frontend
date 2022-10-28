import { useLogoutUseCase } from "../../../infrastructure/adapter/useLogoutUseCase";

export const useLogoutViewModel = () => {
    const useCase = useLogoutUseCase();

    const logout = () => {
        useCase.execute();
    }

    return { logout }
}