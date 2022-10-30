import { create } from "@codescouts/store";
import { Counter } from "../../domain/model/Counter";
import { CounterService } from "../../domain/services/CounterService";
export const useCounter = create<CounterService>((set) => ({
    counter: new Counter(0),
    save: (counter: Counter) => set({ counter })
}))
    .withPersist(Counter)
    .build();