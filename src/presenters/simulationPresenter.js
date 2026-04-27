import { ParameterSet } from '../models/parameterSet.js';
import { Calculator } from '../core/Calculator.js';

export class SimulationPresenter {
    constructor(view) {
        this.view = view;
        this.model = new ParameterSet();
        this.calculator = new Calculator();
        this.period = 'd';
        
        this.view.onParameterChange = this.#changeParameter.bind(this);
        this.view.onPeriodChange = this.#changePeriod.bind(this);
        
        const initialState = this.model.getFullState();
        this.view.mount(initialState, this.period);
        this.#update();
    }

    #changeParameter(id, direction) {
        if (!this.model.canChange(id, direction)) return;
        this.model.applyChange(id, direction);
        this.#update();
    }

    #changePeriod(period) {
        this.period = period;
        this.#update();
    }

    #update() {
        const params = this.model.getFullState();
        const results = this.calculator.calculate(this.model.values(), this.period);
        this.view.update(params, results, this.period);
    }
}
