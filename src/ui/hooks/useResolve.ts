import Container from "ts-injecty";

type Newly<T> = {
    new(...args: any[]): T;
};

export const useResolve = <T>(dependency: Newly<T>) => {
    return Container.instance.resolve<T>(dependency);
}