export class Counter {
    private currentValue: number;
    private canDecrementValueManually: boolean;

    constructor(initialValue: number) {
        this.currentValue = initialValue;
        this.canDecrementValueManually = false;
    }

    public get value() {
        return this.currentValue;
    }

    public canDecrementValue(): boolean {
        return this.currentValue > 0 || this.canDecrementValueManually;
    }

    public increment(): void {
        this.currentValue++;
    }

    public decrement(): void {
        if (this.canDecrementValue())
            this.currentValue--;
    }

    public toggleDecrementValue(): void {
        this.canDecrementValueManually = !this.canDecrementValueManually;
    }
}