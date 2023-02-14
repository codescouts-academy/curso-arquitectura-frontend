import { Configuration } from "@domain/model/Configuration";
import { ConfigurationRepository } from "@domain/repository/ConfigurationRepository"

import config from "../../config.json";

export const useConfigurationRepository = (): ConfigurationRepository => {
    return {
        getConfiguration: () => {
            const url = window.location.origin as keyof typeof config;
            const configuration = config[url] as Configuration;

            if (!configuration) throw new Error("WhiteLabel client Not Supported")

            return configuration;
        }
    }
}