import { styles, icons } from '../styles/styles.js';
import { el } from '../core/dom.js';

export class PanelPages {
    constructor() {
        this.pages = [];
        this.currentPage = 0;
        
        this.element = el('div', styles.paramPanel);
        
        this.header = el('div', styles.panelPagesHeader);
        
        this.prevBtn = el('button', styles.panelPagesBtn);
        const prevIcon = el('i', styles.panelPagesBtnIcon + ' ' + icons.chevronLeft);
        this.prevBtn.appendChild(prevIcon);
        this.prevBtn.addEventListener('click', () => this.#prevPage());
        
        this.titleEl = el('h2', styles.panelPagesTitle);
        
        this.nextBtn = el('button', styles.panelPagesBtn);
        const nextIcon = el('i', styles.panelPagesBtnIcon + ' ' + icons.chevronRight);
        this.nextBtn.appendChild(nextIcon);
        this.nextBtn.addEventListener('click', () => this.#nextPage());
        
        this.header.appendChild(this.prevBtn);
        this.header.appendChild(this.titleEl);
        this.header.appendChild(this.nextBtn);
        
        this.divider = el('div', styles.paramDivider);
        this.contentEl = el('div', styles.panelPagesContent);
        
        this.element.appendChild(this.header);
        this.element.appendChild(this.divider);
        this.element.appendChild(this.contentEl);
    }
    
    addPage(title, element) {
        this.pages.push({title, element});
        this.contentEl.appendChild(element);
        element.style.display = 'none';
    }
    
    init() {
        if (this.pages.length > 0) this.#showPage(0);
    }
    
    #showPage(index) {
        if (index < 0 || index >= this.pages.length) return;
        
        this.pages.forEach((page, i) => {
            page.element.style.display = i === index ? 'block' : 'none';
        });
        
        this.currentPage = index;
        this.titleEl.textContent = this.pages[index].title;
        
        this.prevBtn.disabled = index === 0;
        this.prevBtn.className = index === 0 ? styles.panelPagesBtnDisabled : styles.panelPagesBtn;
        
        this.nextBtn.disabled = index === this.pages.length - 1;
        this.nextBtn.className = index === this.pages.length - 1 ? styles.panelPagesBtnDisabled : styles.panelPagesBtn;
    }
    
    #prevPage() {if (this.currentPage > 0) this.#showPage(this.currentPage - 1);}
    #nextPage() {if (this.currentPage < this.pages.length - 1) this.#showPage(this.currentPage + 1);}
}
