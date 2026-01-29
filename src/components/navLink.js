import { styles, icons } from '../styles/styles.js';
import { el } from '../core/dom.js';

export class NavLink {
    constructor(menu, path, text, iconName) {
        this.path = path;
        this.element = this.#createLink(text, iconName);
        menu.appendChild(this.element);
        
        window.addEventListener('routechange', () => this.updateActive());
        this.updateActive();
    }
    
    updateActive() {
        const isActive = window.location.hash === `#${this.path}`;
        this.element.className = styles.menuLinkBase + ' ' + 
            (isActive ? styles.menuLinkActive : styles.menuLinkDefault);
    }
    
    #createLink(text, iconName) {
        const link = el('a');
        link.href = `#${this.path}`;
        
        const icon = el('i', styles.iconBase + ' ' + icons[iconName]);
        const textEl = el('span', styles.menuText, text);
        
        link.appendChild(icon);
        link.appendChild(textEl);
        
        return link;
    }
}