const init = <T>(ctor: any, props: Partial<T>): T => {
  return Object.assign(new ctor(), props);
};

export const merge = <StateType, E>(
  EntityType: E,
  persistedState: any,
  currentState: StateType
) => {
  const entityKey = Object.keys(persistedState)[0];
  const persistedEntity = persistedState[entityKey];

  const entityData = Array.isArray(persistedEntity)
    ? persistedEntity.map((entity) => init(EntityType, entity))
    : init(EntityType, persistedEntity);

  const state = {
    [entityKey]: entityData,
  };

  return {
    ...currentState,
    ...state,
  } as StateType;
};
