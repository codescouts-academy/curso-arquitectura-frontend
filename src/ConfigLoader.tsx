import { useLoadConfigurationUseCase } from "@infrastructure/adapter/useLoadConfigurationUseCase";
import { Loader } from "@ui/components";
import { useLayoutEffect, useState } from "react";

export const ConfigLoader = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const loadConfigurationUseCase = useLoadConfigurationUseCase();

  useLayoutEffect(() => {
    loadConfigurationUseCase.execute();

    setIsLoaded(true);
  }, []);

  if (isLoaded) return children;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Loader loading />
    </div>
  );
};
