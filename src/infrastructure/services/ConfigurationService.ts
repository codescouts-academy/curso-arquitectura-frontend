import { create } from "@codescouts/store";

import { Configuration } from "@domain/model/Configuration";
import { ConfigurationService } from "../../domain/services/ConfigurationService";

export const useConfiguration = create<ConfigurationService>((set) => ({
    save: (configuration: Configuration) => set({ configuration })
}))
    .build();