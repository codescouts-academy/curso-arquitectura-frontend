export interface CounterRepository {
    getInitialValue(): Promise<number>;
}