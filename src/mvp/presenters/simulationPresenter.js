import { ParameterSet } from '../models/parameterSet.js';
import { ParameterValidator } from '../models/parameterValidator.js';
import { CapacityCalculator } from '../models/capacityCalculator.js';
import { FinanceCalculator } from '../models/financeCalculator.js';

export class SimulationPresenter {
    constructor(view) {
        this.view = view;
        this.params = new ParameterSet();
        this.validator = new ParameterValidator();
        this.capacity = new CapacityCalculator();
        this.finance = new FinanceCalculator();
        this.financePeriod = 'day';
        
        this.view.onIncrease = (id) => this.#handleIncrease(id);
        this.view.onDecrease = (id) => this.#handleDecrease(id);
        this.view.onFinancePeriodChange = (period) => this.#handleFinancePeriodChange(period);
        
        this.view.render(this.params.all());
        this.#update();
    }
    
    #handleIncrease(id) {
        this.params.get(id).increase();
        this.#update();
    }
    
    #handleDecrease(id) {
        this.params.get(id).decrease();
        this.#update();
    }
    
    #handleFinancePeriodChange(period) {
        this.financePeriod = period;
        this.#update();
    }
    
    #canChange(id, delta) {
        const p = this.params.get(id);
        const newValue = p.value + delta;
        if (newValue < p.min || newValue > p.max) return false;
        return this.validator.validate(this.params.values(), id, newValue);
    }
    
    #update() {
        const values = this.params.values();
        
        this.params.all().forEach(p => {
            const canDec = this.#canChange(p.id, -p.step);
            const canInc = this.#canChange(p.id, p.step);
            this.view.updateParam(p.id, p.value, canDec, canInc);
        });
        
        const cap = this.capacity.calculate(values, 'day');
        const fin = this.finance.calculate(values);
        const mult = this.financePeriod === 'month' ? 30 : 1;
        
        this.view.updateResults(cap, fin, mult);
    }
}
