import { create } from "@codescouts/store";
import { Counter } from "../../domain/model/Counter";
import { CounterService } from "../../domain/services/CounterService";

export const useCounter = create<CounterService>((set) => ({
    save: (counter: Counter) => set({ counter })
}))
    .withPersist(Counter)
    .build();