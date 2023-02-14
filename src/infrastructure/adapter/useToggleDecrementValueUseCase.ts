import { ToggleDecrementValueUseCase } from "@application/allow-decrement-value-use-case";
import { useCounter } from "@infrastructure/services/CounterService";

export const useToggleDecrementValueUseCase = () => {
    const counterService = useCounter();

    return new ToggleDecrementValueUseCase(counterService);
}