import { Counter } from "@domain/model/Counter";
import { CounterService } from "@domain/services/CounterService";

export class IncrementUseCase {
    constructor(private readonly counterService: CounterService) {

    }

    public execute(counter: Counter) {
        counter.increment();

        this.counterService.save(counter);
    }
}