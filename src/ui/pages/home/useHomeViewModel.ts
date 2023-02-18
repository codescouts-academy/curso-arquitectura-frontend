import { useCallback, useLayoutEffect, useState } from "react";

import { useToggleDecrementValueUseCase } from "@infrastructure/adapter/useToggleDecrementValueUseCase";
import { useGetInitialValueUseCase } from "@infrastructure/adapter/useGetInitialValueUseCase";
import { useIncrementUseCase } from "@infrastructure/adapter/useIncrementUseCase";
import { useDecrementUseCase } from "@infrastructure/adapter/useDecrementUseCase";

import { useCounter } from "@infrastructure/services/CounterService";
import { useConfiguration } from "@infrastructure/services/ConfigurationService";

export const useHomeViewModel = () => {
    const [loading, setLoading] = useState(true);
    const service = useCounter();
    const counter = service.counter;
    const { configuration } = useConfiguration();

    const toggleDecrementValueUseCase = useToggleDecrementValueUseCase();
    const getInitialValue = useGetInitialValueUseCase();
    const incrementUseCase = useIncrementUseCase();
    const decrementUseCase = useDecrementUseCase();

    useLayoutEffect(() => {
        getInitialValue.execute().finally(() => setLoading(false));
    }, [])

    const increment = useCallback(() => {
        incrementUseCase.execute(counter!);
    }, [counter, incrementUseCase])

    const decrement = useCallback(() => {
        decrementUseCase.execute(counter!);
    }, [counter, decrementUseCase])


    const toggleDecrementValueManually = useCallback(() => {
        toggleDecrementValueUseCase.execute()
    }, [toggleDecrementValueUseCase])

    return { loading, counter, increment, decrement, configuration, toggleDecrementValueManually }
}