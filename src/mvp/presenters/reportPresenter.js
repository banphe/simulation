import { ReportService } from '../models/reportService.js';
import { getChartOptions } from '../config/chartConfig.js';

export class ReportPresenter {
    constructor(view) {
        this.view = view;
        
        this.view.onPeriodChanged = (period) => this.#handlePeriodChange(period);
        this.view.onMetricChanged = (metric) => this.#handleMetricChange(metric);
        
        this.view.render();

        const periods = ReportService.getPeriods();
        const metrics = ReportService.getMetrics();
        
        this.view.fillPeriods(periods);
        this.view.fillMetrics(metrics);
        this.view.selectPeriod('D');
        this.view.selectMetric('Przychody');
        
        this.#loadData();
    }
    
    #handlePeriodChange(period) {this.#loadData();}
    
    #handleMetricChange(metric) {this.#loadData();}
    
    #loadData() {
        const data = ReportService.getData();
        const options = getChartOptions(data);
        this.view.updateChart(options);
    }
}
