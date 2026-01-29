// ReportView
import { styles } from '../../styles/styles.js';
import { el } from '../../core/dom.js';
import { Dropdown } from '../../components/dropdown.js';
import { ButtonGroup } from '../../components/buttonGroup.js';

export class ReportView {
    constructor(container) {
        this.wrapper = el('div', styles.reportWrapper);
        container.appendChild(this.wrapper);
    }

    onPeriodChanged = null;
    onMetricChanged = null;

    render(){
        this.buttonGroup = new ButtonGroup(this.onPeriodChanged);
        this.metricDropdown = new Dropdown(this.onMetricChanged);
        
        const controlsRow = el('div', styles.controlsRow);
        controlsRow.appendChild(this.buttonGroup.element);
        controlsRow.appendChild(this.metricDropdown.element);
        
        this.chartElement = el('div');
        this.wrapper.appendChild(controlsRow);
        this.wrapper.appendChild(this.chartElement);
    }

    fillPeriods(periods) {this.buttonGroup.fillOptions(periods);}
    fillMetrics(metrics) {this.metricDropdown.fillOptions(metrics);}
    selectPeriod(period) {this.buttonGroup.select(period);}
    selectMetric(metric) {this.metricDropdown.select(metric);}

    show() {this.wrapper.style.display = 'block';}
    hide() {this.wrapper.style.display = 'none';}    
    
    updateChart(options) {
        if (this.chart) {this.chart.destroy();}
        this.chart = new ApexCharts(this.chartElement, options);
        this.chart.render();
    }
}
