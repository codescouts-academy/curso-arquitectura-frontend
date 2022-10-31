import { useCallback, useLayoutEffect, useState } from "react";
import { DecrementUseCase } from "../../../application/decrement-use-case";
import { GetInitialValueUseCase } from "../../../application/get-initial-value-use-case";
import { IncrementUseCase } from "../../../application/increment-use-case";
import { useCounter } from "../../../infrastructure/services/CounterService";
import { useResolve } from "../../hooks/useResolve";

export const useHomeViewModel = () => {
    const [loading, setLoading] = useState(true);
    const { counter } = useCounter();
    const getInitialValue = useResolve(GetInitialValueUseCase); // useGetInitialValueUseCase();
    const incrementUseCase = useResolve(IncrementUseCase); // useIncrementUseCase();
    const decrementUseCase = useResolve(DecrementUseCase); //useDecrementUseCase();

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