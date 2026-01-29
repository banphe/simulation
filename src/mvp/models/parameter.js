export class Parameter {
    constructor(id, label, value, min, max, step = 1) {
        this.id = id;
        this.label = label;
        this.value = value;
        this.min = min;
        this.max = max;
        this.step = step;
    }
    
    increase() {this.value += this.step;}
    decrease() {this.value -= this.step;}
}
