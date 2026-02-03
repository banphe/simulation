export class SimulationPresenter {
    constructor(view, model, calculator) {
        this.view = view;
        this.model = model;
        this.calculator = calculator;
        this.period = 'd';
        
        this.view.onParameterChange = (id, direction) => this.#changeParameter(id, direction);
        this.view.onPeriodChange = (period) => this.#changePeriod(period);
    }

    mount(root) {
        const initialState = this.model.getFullState();
        this.view.mount(root, initialState);
        this.#render();
    }

    #changeParameter(id, direction) {
        if (!this.model.canChange(id, direction)) return;
        this.model.applyChange(id, direction);
        this.#render();
    }

    #changePeriod(period) {
        this.period = period;
        this.#render();
    }

    #render() {
        const params = this.model.getFullState();
        const results = this.calculator.calculate(this.model.values(), this.period);
        this.view.render(params, results, this.period);
    }
}
