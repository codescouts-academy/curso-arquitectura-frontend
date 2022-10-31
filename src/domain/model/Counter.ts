export class Counter {
    private currentValue: number;

    constructor(initialValue: number) {
        this.currentValue = initialValue;
    }

    public get value() {
        return this.currentValue;
    }

    public canDecrementValue(): boolean {
        return this.currentValue > 0
    }

    public increment(): void {
        this.currentValue++;
    }

    public decrement(): void {
        if (this.canDecrementValue())
            this.currentValue--;
    }
}