import { styles } from '../styles/styles.js';
import { el } from '../core/dom.js';

export class ButtonGroup {
    constructor(onSelect = null) {
        this.onSelect = onSelect;
        this.buttons = {}; 
        this.element = el('div', styles.buttonGroup);
    }
    
    fillOptions(options) {
        this.element.innerHTML = '';
        this.buttons = {};
        
        options.forEach(option => {
            const btn = el('button', styles.buttonGroupItemBase + ' ' + styles.buttonGroupItemDefault, option.label);
            btn.addEventListener('click', () => {this.#onClick(option.id)});
            this.buttons[option.id] = btn;
            this.element.appendChild(btn);
        });
    }
    
    select(value) {
        for (const id in this.buttons) {
            const isActive = id === value;
            this.buttons[id].className = styles.buttonGroupItemBase + ' ' + 
                (isActive ? styles.buttonGroupItemActive : styles.buttonGroupItemDefault);
        }
    }
    
    #onClick(optionId) {this.select(optionId); this.onSelect(optionId);}
}
