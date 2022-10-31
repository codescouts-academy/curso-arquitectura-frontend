import { Counter } from "../model/Counter";

export interface CounterService {
    counter?: Counter,
    save: (counter: Counter) => void;
}