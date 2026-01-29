import { Parameter } from './parameter.js';

export class ParameterSet {
    constructor() {
        this.items = {};
        this.#init();
    }
    
    get(id) {return this.items[id];}
    all() {return Object.values(this.items);}
    
    values() {
        const result = {};
        for (const id in this.items) result[id] = this.items[id].value;
        return result;
    }
    
    #init() {
        this.#add('hoursOpen', 'Godziny otwarcia', 10, 1, 14);
        this.#add('cabins', 'Gabinety', 2, 1, 10);
        this.#add('therapists', 'Masażyści', 4, 1, 10);
        this.#add('massageHours', 'Masażogodziny', 5, 0, 10, 0.5);
        this.#add('availability', 'Dostępność masażysty', 10, 0, 14);
        this.#add('monthlyCosts', 'Koszty miesięczne', 6000, 500, 50000, 500);
        this.#add('hourlyRevenue', 'Przychód za godzinę', 140, 50, 300, 10);
        this.#add('therapistRate', 'Stawka masażysty', 75, 30, 150, 5);
    }
    
    #add(id, label, value, min, max, step = 1) {
        this.items[id] = new Parameter(id, label, value, min, max, step);
    }
}
