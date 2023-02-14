import { CounterService } from "@domain/services/CounterService";

export class ToggleDecrementValueUseCase {
    constructor(private readonly counterService: CounterService) {

    }

    public execute() {
        const counter = this.counterService.counter!;

        counter.toggleDecrementValue();

        this.counterService.save(counter)
    }
}