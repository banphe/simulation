import { styles } from '../styles/styles.js';
import { el } from '../core/dom.js';
import { ButtonGroup } from './buttonGroup.js';

export class PanelFinance {
    constructor() {
        this.element = el('div', styles.paramPanel);
        this.onPeriodChange = null;
        
        const header = el('div', styles.panelFinanceHeader);
        const title = el('h2', styles.paramHeader, 'Wyniki');
        
        this.buttonGroup = new ButtonGroup((id) => this.onPeriodChange?.(id));
        
        header.appendChild(title);
        header.appendChild(this.buttonGroup.element);
        
        const divider = el('div', styles.paramDivider);
        this.contentEl = el('div');
        
        this.element.appendChild(header);
        this.element.appendChild(divider);
        this.element.appendChild(this.contentEl);
        
        const periods = [
            {id: 'day', label: 'Dzień'},
            {id: 'month', label: 'Miesiąc'}
        ];
        this.buttonGroup.fillOptions(periods);
        this.buttonGroup.select('day');
    }
    
    setContent(element) {
        this.contentEl.innerHTML = '';
        this.contentEl.appendChild(element);
    }
}
