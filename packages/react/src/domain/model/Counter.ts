export class Counter {
    constructor(private currentValue: number) {

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