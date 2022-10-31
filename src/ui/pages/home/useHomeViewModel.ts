import { useCallback, useLayoutEffect, useState } from "react";
import { useDecrementUseCase } from "../../../infrastructure/adapter/useDecrementUseCase";
import { useGetInitialValueUseCase } from "../../../infrastructure/adapter/useGetInitialValueUseCase";
import { useIncrementUseCase } from "../../../infrastructure/adapter/useIncrementUseCase";
import { useCounter } from "../../../infrastructure/services/CounterService";

export const useHomeViewModel = () => {
    const [loading, setLoading] = useState(true);
    const { counter } = useCounter();

    const getInitialValue = useGetInitialValueUseCase();
    const incrementUseCase = useIncrementUseCase();
    const decrementUseCase = useDecrementUseCase();

    useLayoutEffect(() => {
        getInitialValue.execute().finally(() => setLoading(false));
    }, [getInitialValue])

    const increment = useCallback(() => {
        incrementUseCase.execute(counter!);
    }, [counter, incrementUseCase])

    const decrement = useCallback(() => {
        decrementUseCase.execute(counter!);
    }, [counter, decrementUseCase])


    return { loading, counter, increment, decrement }
}