import { Counter } from "@domain/model/Counter";
import { CounterRepository } from "@domain/repository/CounterRepository";
import { CounterService } from "@domain/services/CounterService";

export class GetInitialValueUseCase {
    constructor(
        private readonly counterService: CounterService,
        private readonly counterRepository: CounterRepository) {

    }

    public async execute() {
        const counterFromServer = await this.counterRepository.getInitialValue();

        this.counterService.save(new Counter(counterFromServer));
    }
}