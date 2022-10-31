import { register } from "ts-injecty";

import { useCounterRepository } from "./infrastructure/repository/CounterRepository";
import { useCounter } from "./infrastructure/services/CounterService";

import { DecrementUseCase } from "./application/decrement-use-case";
import { GetInitialValueUseCase } from "./application/get-initial-value-use-case";
import { IncrementUseCase } from "./application/increment-use-case";

export const buildDependencies = (builder: typeof register) => {
    return [
        builder(useCounter.name).withDynamicValue(() => useCounter()).build(),
        builder(useCounterRepository.name)
            .withDynamicValue(() => useCounterRepository())
            .build(),
        builder(GetInitialValueUseCase)
            .asASingleton()
            .withDependency(useCounter.name)
            .and(useCounterRepository.name)
            .build(),
        builder(IncrementUseCase).withDependency(useCounter.name).build(),
        builder(DecrementUseCase).withDependency(useCounter.name).build(),
    ];
}