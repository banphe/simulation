import { styles } from '../../styles/styles.js';
import { el } from '../../core/dom.js';
import { ParameterControl } from '../../components/parameterControl.js';
import { PanelPages } from '../../components/panelPages.js';
import { PanelFinance } from '../../components/panelFinance.js';
import { ResultCard } from '../../components/resultCard.js';
import { ResultGrid } from '../../components/resultGrid.js';

export class SimulationView {
    constructor(container) {
        this.element = el('div', styles.viewWrapper);
        this.controls = {};
        this.results = {};
        this.onIncrease = null;
        this.onDecrease = null;
        this.onFinancePeriodChange = null;
        container.appendChild(this.element);
    }

    render(params) {
        this.paramPanel = new PanelPages();
        
        const lokalPage = el('div');
        const pracownicyPage = el('div');
        const uslugiPage = el('div');
        
        const groups = {
            lokal: ['hoursOpen', 'cabins', 'monthlyCosts'],
            pracownicy: ['therapists', 'availability', 'therapistRate'],
            uslugi: ['massageHours', 'hourlyRevenue']
        };
        
        params.forEach(p => {
            const control = new ParameterControl(p.label);
            control.onIncrease = () => this.onIncrease?.(p.id);
            control.onDecrease = () => this.onDecrease?.(p.id);
            this.controls[p.id] = control;
            
            if (groups.lokal.includes(p.id)) lokalPage.appendChild(control.element);
            else if (groups.pracownicy.includes(p.id)) pracownicyPage.appendChild(control.element);
            else if (groups.uslugi.includes(p.id)) uslugiPage.appendChild(control.element);
        });
        
        this.paramPanel.addPage('Lokal', lokalPage);
        this.paramPanel.addPage('Pracownicy', pracownicyPage);
        this.paramPanel.addPage('Usługi', uslugiPage);
        this.paramPanel.init();
        
        this.element.appendChild(this.paramPanel.element);
        
        const resultPanel = el('div', styles.paramPanel);
        const resultHeader = el('h2', styles.paramHeader, 'Wyniki');
        const resultDivider = el('div', styles.paramDivider);
        
        resultPanel.appendChild(resultHeader);
        resultPanel.appendChild(resultDivider);
        
        this.#createCapacityResults();
        resultPanel.appendChild(this.capacityGrid.element);
        resultPanel.appendChild(this.usageGrid.element);
        
        this.element.appendChild(resultPanel);
        
        this.financePanel = new PanelFinance();
        this.financePanel.onPeriodChange = (period) => this.onFinancePeriodChange?.(period);
        this.#createFinanceResults();
        this.financePanel.setContent(this.financeGrid.element);
        
        this.element.appendChild(this.financePanel.element);
    }
    
    #createCapacityResults() {
        this.capacityGrid = new ResultGrid();
        this.results.cabinHours = new ResultCard('Gabinetogodziny', 'blue');
        this.results.workHours = new ResultCard('Roboczogodziny', 'green');
        this.results.booksyHours = new ResultCard('Dostępność Booksy', 'amber');
        this.capacityGrid.add(this.results.cabinHours);
        this.capacityGrid.add(this.results.workHours);
        this.capacityGrid.add(this.results.booksyHours);
        
        this.usageGrid = new ResultGrid();
        this.results.salonUsage = new ResultCard('Wykorzystanie salonu', 'purple');
        this.results.therapistUsage = new ResultCard('Wykorzystanie masażysty', 'rose');
        this.usageGrid.add(this.results.salonUsage);
        this.usageGrid.add(this.results.therapistUsage);
    }
    
    #createFinanceResults() {
        this.financeGrid = new ResultGrid();
        this.results.margin = new ResultCard('Marża', 'emerald');
        this.results.income = new ResultCard('Dochód salonu', 'indigo');
        this.results.therapistIncome = new ResultCard('Dochód masażysty', 'orange');
        this.results.breakEven = new ResultCard('Break-even', 'blue');
        this.financeGrid.add(this.results.margin);
        this.financeGrid.add(this.results.income);
        this.financeGrid.add(this.results.therapistIncome);
        this.financeGrid.add(this.results.breakEven);
    }
    
    updateParam(id, value, canDec, canInc) {
        const ctrl = this.controls[id];
        ctrl.setValue(value);
        ctrl.setDecEnabled(canDec);
        ctrl.setIncEnabled(canInc);
    }
    
    updateResults(capacity, finance, mult) {
        this.results.cabinHours.setValue(capacity.cabinHours.toFixed(0));
        this.results.workHours.setValue(capacity.workHours.toFixed(0));
        this.results.booksyHours.setValue(capacity.booksyHours.toFixed(0));
        this.results.salonUsage.setValue(capacity.salonUsage.toFixed(1) + '%');
        this.results.therapistUsage.setValue(capacity.therapistUsage.toFixed(1) + '%');
        this.results.margin.setValue((finance.margin * mult).toFixed(0) + ' zł');
        this.results.income.setValue((finance.income * mult).toFixed(0) + ' zł');
        this.results.therapistIncome.setValue((finance.therapistIncome * mult).toFixed(0) + ' zł');
        this.results.breakEven.setValue((finance.breakEven * mult).toFixed(1) + ' h');
    }
    
    show() {this.element.style.display = 'block';}
    hide() {this.element.style.display = 'none';}
}
