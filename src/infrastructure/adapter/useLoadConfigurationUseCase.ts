import { LoadConfigurationUseCase } from "@application/load-configuration-use-case";
import { useConfigurationRepository } from "@infrastructure/repository/ConfigurationRepository";
import { useConfiguration } from "@infrastructure/services/ConfigurationService";

export const useLoadConfigurationUseCase = () => {
    const service = useConfiguration();
    const repository = useConfigurationRepository();

    return new LoadConfigurationUseCase(service, repository);
}