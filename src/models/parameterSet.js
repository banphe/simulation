import { Parameter } from './parameter.js';

export class ParameterSet {
    constructor() {
        this.items = {};
        this.#init();
    }

    canChange(id, direction) {
        const p = this.items[id];
        const newValue = p.calculateNewValue(direction);
        
        if (!p.isInRange(newValue)) return false;
        
        const v = this.values();
        v[id] = newValue;
        
        const capacity = v.hoursOpen * v.cabins;
        const workHours = v.employees * v.serviceHours;
        
        if (workHours > capacity) return false;
        if (v.serviceHours > v.hoursOpen) return false;
        
        return true;
    }

    applyChange(id, direction) {
        const p = this.items[id];
        p.value = p.calculateNewValue(direction);
    }

    getFullState() {
        return Object.values(this.items).map(p => ({
            id: p.id,
            label: p.label,
            value: p.value,
            canInc: this.canChange(p.id, 1),
            canDec: this.canChange(p.id, -1),
            page: p.page
        }));
    }

    values() {
        const result = {};
        for (const id in this.items) result[id] = this.items[id].value;
        return result;
    }

    #init() {
        this.#add('hoursOpen', 'Godziny otwarcia', 8, 1, 14, 1, 'Salon');
        this.#add('cabins', 'Stanowiska Pracy', 1, 1, 10, 1, 'Salon');
        this.#add('employees', 'Ilość Personelu', 1, 0, 10, 1, 'Personel');
        this.#add('serviceHours', 'Godziny', 2, 0, 10, 0.5, 'Personel');
        this.#add('monthlyCosts', 'Koszty miesięczne', 1800, 100, 50000, 100, 'Salon');
        this.#add('hourlyRevenue', 'Przychód za godzinę', 140, 50, 300, 10, 'Usługi');
        this.#add('employeeRate', 'Stawka pracownika', 75, 0, 150, 5, 'Personel');
    }

    #add(id, label, value, min, max, step, page) {
        this.items[id] = new Parameter(id, label, value, min, max, step, page);
    }
}
