import { DecrementUseCase } from "../../application/decrement-use-case";
import { useCounter } from "../services/CounterService"

export const useDecrementUseCase = () => {
    const counter = useCounter();

    return new DecrementUseCase(counter);
}