import { el } from '../utils/dom.js';
import { ButtonGroup } from '../components/molecules/ButtonGroup.js';
import { Button } from '../components/atoms/Button.js';
export class ReportView {
    constructor(container) {
        this.element = el('div', 'hidden flex flex-col flex-1 w-full p-0 gap-4');
        container.appendChild(this.element);
        this.onPeriodChange = null;
        this.chart = null;
    }

    mount(initialPeriod) {
        const controls = el('div', 'flex gap-2 bg-white p-4 rounded-lg shadow-md');
        const dayBtn = Button('D', 'btn-xs');
        const monthBtn = Button('M', 'btn-xs');
        dayBtn.addEventListener('click', () => this.onPeriodChange('d'));
        monthBtn.addEventListener('click', () => this.onPeriodChange('m'));
        
        const menu = ButtonGroup(dayBtn, monthBtn, initialPeriod === 'm' ? 1 : 0);
        controls.appendChild(menu);
        this.chartElement = el('div', 'bg-white rounded-lg shadow-md p-4 flex-1');
        this.element.append(controls, this.chartElement);
    }


    show() {this.element.style.display = 'flex';}
    
    hide() {this.element.style.display = 'none';}
    
    updateChart(options) {
        this.chartElement.innerHTML = '';
        this.chart = new ApexCharts(this.chartElement, options);
        this.chart.render();
    }
}
