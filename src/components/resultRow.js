import { styles } from '../styles/styles.js';
import { el } from '../core/dom.js';

export class ResultRow {
    constructor(label) {
        this.element = el('div', styles.resultRow);
        this.labelEl = el('span', styles.resultRowLabel, label);
        this.valueEl = el('span', styles.resultRowValue);
        
        this.element.appendChild(this.labelEl);
        this.element.appendChild(this.valueEl);
    }
    
    setValue(value) {this.valueEl.textContent = value;}
}
