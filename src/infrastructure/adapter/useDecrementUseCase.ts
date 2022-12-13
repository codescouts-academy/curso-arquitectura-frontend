import { DecrementUseCase } from "@application/decrement-use-case";
import { useCounter } from "@infrastructure/services/CounterService"

export const useDecrementUseCase = () => {
    const counter = useCounter();

    return new DecrementUseCase(counter);
}