import { useAlwaysZeroCounterRepository } from "./strategies/AlwaysZeroCounterRepository";
import { useRandomCounterRepository } from "./strategies/RandomCounterRepository";

import { CounterRepository } from "@domain/repository/CounterRepository";
import { useConfiguration } from "@infrastructure/services/ConfigurationService";

type WhiteLabelRemote = {
    [key: string]: () => CounterRepository
}

const SupportedImplementations: WhiteLabelRemote = {
    "RANDOM_SERVER": useRandomCounterRepository,
    "ALWAYS_ZERO_SERVER": useAlwaysZeroCounterRepository
}

export const useCounterRepository = () => {
    const { configuration } = useConfiguration();

    const useRemote = SupportedImplementations[configuration!.remote];

    return useRemote();
}