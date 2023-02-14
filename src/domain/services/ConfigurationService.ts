import { Configuration } from "@domain/model/Configuration";

export interface ConfigurationService {
    configuration?: Configuration;
    save(configuration: Configuration): void;
}
