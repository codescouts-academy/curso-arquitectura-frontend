import createImpl, {
  State,
  StateCreator,
  StoreMutatorIdentifier,
} from "zustand";
import { devtools, persist as persistImpl } from "zustand/middleware";

import { merge } from "./store.extensions";

export const create = <
  T extends State,
  Mos extends [StoreMutatorIdentifier, unknown][] = []
>(
  stateCreator: StateCreator<T, [], Mos>
) => {
  const configuration = {
    withPersist: false,
    entityType: undefined as any,
  };

  const store = createImpl<T>();

  const build = () => {
    const { withPersist, entityType } = configuration;

    if (withPersist) {
      const storageKey = entityType.name;

      return store(
        devtools(
          persistImpl(stateCreator as any, {
            name: storageKey,
            merge: (persistedState: any, currentState: T) =>
              merge(entityType, persistedState, currentState),
          })
        )
      );
    }

    return store(devtools(stateCreator as any));
  };

  const withPersist = (entityType: any) => {
    configuration.entityType = entityType;
    configuration.withPersist = true;

    return { build };
  };

  return {
    build,
    withPersist,
  };
};
