import { ParamsPanel } from '../components/organisms/ParamsPanel.js';
import { ResultsPanel } from '../components/organisms/ResultsPanel.js';

export class SimulationView {
    constructor() {
        this.onParameterChange = null;
        this.onPeriodChange = null;
        this.paramsPanel = null;
        this.resultsPanel = null;
    }

    mount(root, params) {
        this.paramsPanel = ParamsPanel(params, (id, dir) => this.onParameterChange(id, dir));
        this.resultsPanel = ResultsPanel((period) => this.onPeriodChange(period));
        root.append(this.paramsPanel.element, this.resultsPanel.element);
    }

    render(params, results, period) {
        this.paramsPanel.update(params);
        this.resultsPanel.update(results, period);
    }
}
