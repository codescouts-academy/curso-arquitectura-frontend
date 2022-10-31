import React, { useEffect, useRef, useState } from "react";
import Container, { register } from "ts-injecty";
import { DecrementUseCase } from "./application/decrement-use-case";
import { GetInitialValueUseCase } from "./application/get-initial-value-use-case";
import { IncrementUseCase } from "./application/increment-use-case";
import { useCounterRepository } from "./infrastructure/repository/CounterRepository";
import { useCounter } from "./infrastructure/services/CounterService";

export const DIProvider = ({ children }: { children: React.ReactElement }) => {
    const [containerLoaded, setContainerLoaded] = useState(false);

    const dependencies = useRef([
        register(useCounter.name).withImplementation(useCounter()).build(),
        register(useCounterRepository.name).withImplementation(useCounterRepository()).build(),
        register(GetInitialValueUseCase).asASingleton().withDependency(useCounter.name).and(useCounterRepository.name).build(),
        register(IncrementUseCase).withDependency(useCounter.name).build(),
        register(DecrementUseCase).withDependency(useCounter.name).build()
    ])

    useEffect(() => {
        Container.instance.register(dependencies.current);
        setContainerLoaded(true);
    }, [dependencies])

    return containerLoaded ? children : null;
}

