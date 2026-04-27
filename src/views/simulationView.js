import { ParamsPanel } from '../components/organisms/ParamsPanel.js';
import { ResultsPanel } from '../components/organisms/ResultsPanel.js';
import { el } from '../utils/dom.js';

export class SimulationView {
    constructor(container) {
        this.element = el('div', 'hidden flex flex-col flex-1 w-full p-0 gap-4 items-center');

        container.appendChild(this.element);
        
        this.onParameterChange = null;
        this.onPeriodChange = null;
        this.paramsPanel = null;
        this.resultsPanel = null;
    }

    mount(params, initialPeriod) {
        this.paramsPanel = ParamsPanel(params,this.onParameterChange);
        this.resultsPanel = ResultsPanel(initialPeriod, this.onPeriodChange);
        this.element.append(this.paramsPanel.element, this.resultsPanel.element);
    }

    update(params, results, period) {
        this.paramsPanel.update(params);
        this.resultsPanel.update(results, period);
    }

    show() {
        this.element.style.display = 'flex';
    }
    
    hide() {
        this.element.style.display = 'none';
    }
}
