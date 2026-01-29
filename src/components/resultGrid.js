import { styles } from '../styles/styles.js';
import { el } from '../core/dom.js';

export class ResultGrid {
    constructor() {
        this.element = el('div', styles.resultGrid);
    }
    
    add(component) {this.element.appendChild(component.element);}
}
