import { CounterRepository } from "../../domain/repository/CounterRepository";
import { fakeApi } from "../rest/api";

const getRandomValue = () => {
    const valueFromServerFake = Math.floor(Math.random() * 99);

    return valueFromServerFake < 0 ? valueFromServerFake + 1 : valueFromServerFake;
}

export const useCounterRepository = (): CounterRepository => {
    return {
        getInitialValue() {
            return fakeApi(getRandomValue());
        }
    };
};