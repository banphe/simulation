import { styles } from '../../styles/styles.js';
import { el } from '../../core/dom.js';
import { getCalendarOptions } from '../config/calendarConfig.js';

export class CalendarView {
    constructor(container) {
        this.element = el('div', styles.viewWrapper);
        container.appendChild(this.element);
    }

    render(){
     const calendarEl = el('div');
     this.element.appendChild(calendarEl);
     
     const options = getCalendarOptions();
     const calendar = new FullCalendar.Calendar(calendarEl, options);
     calendar.render();
     
     for(let i = 0; i < 20; i++) {
         const testDiv = el('div', 'p-4 bg-blue-100 m-2', `Test content ${i}`);
         this.element.appendChild(testDiv);
     }
    }
    
    show() {this.element.style.display = 'block';}
    
    hide() {this.element.style.display = 'none';}

}
