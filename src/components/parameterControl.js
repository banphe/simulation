import { styles, icons } from '../styles/styles.js';
import { el } from '../core/dom.js';

export class ParameterControl {
    constructor(label) {
        this.onIncrease = null;
        this.onDecrease = null;
        
        this.element = el('div', styles.paramRow);
        
        const labelEl = el('span', styles.paramLabel, label);
        
        this.decBtn = el('button', styles.paramBtn);
        const decIcon = el('i', styles.paramBtnIcon + ' ' + icons.minus);
        this.decBtn.appendChild(decIcon);
        this.decBtn.addEventListener('click', () => this.onDecrease?.());
        
        this.valueEl = el('span', styles.paramValue);
        
        this.incBtn = el('button', styles.paramBtn);
        const incIcon = el('i', styles.paramBtnIcon + ' ' + icons.plus);
        this.incBtn.appendChild(incIcon);
        this.incBtn.addEventListener('click', () => this.onIncrease?.());
        
        const controls = el('div', styles.paramControls);
        controls.appendChild(this.decBtn);
        controls.appendChild(this.valueEl);
        controls.appendChild(this.incBtn);
        
        this.element.appendChild(labelEl);
        this.element.appendChild(controls);
    }
    
    setValue(value) {
        this.valueEl.textContent = value;
    }
    
    setDecEnabled(enabled) {
        this.decBtn.disabled = !enabled;
        this.decBtn.className = enabled ? styles.paramBtn : styles.paramBtnDisabled;
    }
    
    setIncEnabled(enabled) {
        this.incBtn.disabled = !enabled;
        this.incBtn.className = enabled ? styles.paramBtn : styles.paramBtnDisabled;
    }
}
