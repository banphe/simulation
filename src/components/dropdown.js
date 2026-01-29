import { styles, icons } from '../styles/styles.js';
import { el } from '../core/dom.js';

export class Dropdown {
    constructor(onSelect = null) {
        this.onSelect = onSelect;
        
        this.element = el('div', styles.dropdown);
        const dropdownBtn = el('button', styles.dropdownButton);
        this.text = el('span', null);
        const icon = el('i', 'fa-solid ' + icons.chevronDown);
        dropdownBtn.appendChild(this.text);
        dropdownBtn.appendChild(icon);
        
        this.menu = el('div', styles.dropdownMenu);
        
        dropdownBtn.addEventListener('click', () => {this.#toggleMenu();});
        
        this.element.appendChild(dropdownBtn);
        this.element.appendChild(this.menu);
    }
    
    fillOptions(options) {
        this.options = {};
        this.menu.innerHTML = '';
        
        options.forEach((option) => {
            const item = el('div', styles.dropdownItem, option.label);
            item.addEventListener('click', () => {this.#onClick(option);});
            this.options[option.id] = option;
            this.menu.appendChild(item);
        });
    }
    
    select(id) {
        const option = this.options[id];
        if (option) {this.text.textContent = option.label;}
    }
    
    show() {this.element.style.display = 'inline-block';}
    hide() {this.element.style.display = 'none';}
    setVisible(visible) {if (visible) {this.show();} else {this.hide();}}

    #onClick(option) {
        this.text.textContent = option.label;
        this.menu.classList.add('hidden');
        this.onSelect(option.id);
    }
    
    #toggleMenu() {
        this.menu.classList.toggle('hidden');
    }
}
