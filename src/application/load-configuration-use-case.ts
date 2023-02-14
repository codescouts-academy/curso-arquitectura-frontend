import { ConfigurationRepository } from "@domain/repository/ConfigurationRepository";
import { ConfigurationService } from "@domain/services/ConfigurationService";

export class LoadConfigurationUseCase {
    constructor(
        private readonly configurationService: ConfigurationService,
        private readonly configurationRepository: ConfigurationRepository) {

    }

    public execute() {
        const configuration = this.configurationRepository.getConfiguration();

        this.configurationService.save(configuration);
    }
}