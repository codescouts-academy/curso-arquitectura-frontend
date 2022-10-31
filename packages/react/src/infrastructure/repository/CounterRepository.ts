import { CounterRepository } from "../../domain/repository/CounterRepository";
import { fakeApi } from "../rest/api";

const getRandomValue = () => {
    return Math.floor(Math.random() * 10);
}

export const useCounterRepository = (): CounterRepository => {
    return {
        getInitialValue() {
            return fakeApi(getRandomValue());
        }
    };
};