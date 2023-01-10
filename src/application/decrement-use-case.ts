import { Counter } from "@domain/model/Counter";
import { CounterService } from "@domain/services/CounterService";

export class DecrementUseCase {
    constructor(private readonly counterService: CounterService) {

    }

    public execute(counter: Counter) {
        counter.decrement();

        this.counterService.save(counter);
    }
}