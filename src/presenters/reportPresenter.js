import { getChartOptions } from '../config/chartConfig.js';

export class ReportPresenter {
    constructor(view) {
        this.view = view;
        this.period = 'm';
        this.view.onPeriodChange = this.#changePeriod.bind(this);
        this.view.mount(this.period);
        this.#update();
    }
    
    #changePeriod(period) {
        this.period = period;
        this.#update();
    }
    
    #update() {
        const data = this.#getMockData(this.period);
        const options = getChartOptions(data);
        this.view.updateChart(options);
    }
    
    #getMockData(period) {
        const multiplier = { d: 1, w: 7, m: 30 }[period] || 30;
        return [
            { x: 'Przychód', y: 140 * multiplier },
            { x: 'Koszty', y: 75 * multiplier },
            { x: 'Zysk', y: 65 * multiplier }
        ];
    }
}
