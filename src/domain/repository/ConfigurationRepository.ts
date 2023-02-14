import { Configuration } from "@domain/model/Configuration";

export interface ConfigurationRepository {
    getConfiguration(): Configuration;
}