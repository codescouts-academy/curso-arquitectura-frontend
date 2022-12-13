import { IncrementUseCase } from "@application/increment-use-case";

import { useCounter } from "@infrastructure/services/CounterService"

export const useIncrementUseCase = () => {
    const counter = useCounter();

    return new IncrementUseCase(counter);
}