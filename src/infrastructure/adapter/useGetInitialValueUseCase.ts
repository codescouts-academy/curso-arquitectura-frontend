import { GetInitialValueUseCase } from "@application/get-initial-value-use-case";

import { useCounterRepository } from "@infrastructure/repository/CounterRepository";
import { useCounter } from "@infrastructure/services/CounterService"

export const useGetInitialValueUseCase = () => {
    const counter = useCounter();
    const repository = useCounterRepository();

    return new GetInitialValueUseCase(counter, repository);
}