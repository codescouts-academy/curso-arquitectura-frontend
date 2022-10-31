import { Counter } from "./Counter";

describe("Counter should", () => {
    test("not decrement value when its zero", () => {
        const counter = new Counter(0);

        counter.decrement();

        expect(counter.value).toBe(0);
    })

    test("decrement value when it is not zero", () => {
        const counter = new Counter(3);

        counter.decrement();
        counter.decrement();

        expect(counter.value).toBe(1);
    })

    test("increment value", () => {
        const counter = new Counter(3);

        counter.increment();
        counter.increment();

        expect(counter.value).toBe(5);
    })
})