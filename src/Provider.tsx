import React from "react";
import { DIProvider } from "@codescouts/ui";
import { useCounter } from "./infrastructure/services/CounterService";
import { useCounterRepository } from "./infrastructure/repository/CounterRepository";
import { GetInitialValueUseCase } from "./application/get-initial-value-use-case";
import { IncrementUseCase } from "./application/increment-use-case";
import { DecrementUseCase } from "./application/decrement-use-case";
import { register } from "ts-injecty";

export const Provider = ({ children }: { children: React.ReactElement }) => {
  const dependencies = [
    register(useCounter.name).withImplementation(useCounter()).build(),
    register(useCounterRepository.name)
      .withImplementation(useCounterRepository())
      .build(),
    register(GetInitialValueUseCase)
      .asASingleton()
      .withDependency(useCounter.name)
      .and(useCounterRepository.name)
      .build(),
    register(IncrementUseCase).withDependency(useCounter.name).build(),
    register(DecrementUseCase).withDependency(useCounter.name).build(),
  ];

  return <DIProvider dependencies={dependencies}>{children}</DIProvider>;
};
