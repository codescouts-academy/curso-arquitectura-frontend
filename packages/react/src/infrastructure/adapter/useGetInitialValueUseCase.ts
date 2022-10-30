import { useRef } from "react";
import { useCounter } from "../services/CounterService"
import { useCounterRepository } from "../repository/CounterRepository";
import { GetInitialValueUseCase } from "../../application/get-initial-value-use-case";

export const useGetInitialValueUseCase = () => {
    const counter = useCounter();
    const repository = useCounterRepository();

    const useCase = new GetInitialValueUseCase(counter, repository);

    return useRef(useCase).current;
}