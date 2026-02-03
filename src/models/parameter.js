export class Parameter {
    constructor(id, label, value, min, max, step, page) {
        this.id = id;
        this.label = label;
        this.value = value;
        this.min = min;
        this.max = max;
        this.step = step;
        this.page = page;
    }

    calculateNewValue(direction) {
        return this.value + direction * this.step;
    }

    isInRange(value) {
        return value >= this.min && value <= this.max;
    }
}
