import { styles } from '../styles/styles.js';
import { el } from '../core/dom.js';

export class ResultCard {
    constructor(label, color = 'blue') {
        this.element = el('div', styles.resultCard + ' ' + styles[`resultCard${color}`]);
        this.labelEl = el('div', styles.resultCardLabel, label);
        this.valueEl = el('div', styles.resultCardValue);
        this.element.appendChild(this.labelEl);
        this.element.appendChild(this.valueEl);
    }
    
    setValue(value) {this.valueEl.textContent = value;}
}
