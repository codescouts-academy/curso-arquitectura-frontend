import { CounterRepository } from "@domain/repository/CounterRepository";

import { fakeApi } from "../../rest/api";

export const useAlwaysZeroCounterRepository = (): CounterRepository => {
    return {
        getInitialValue() {
            return fakeApi(0);
        }
    };
};