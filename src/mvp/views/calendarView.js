import { styles } from '../../styles/styles.js';
import { el } from '../../core/dom.js';
import { getCalendarOptions } from '../config/calendarConfig.js';

export class CalendarView {
    constructor(container) {
        this.element = el('div', styles.calendarWrapper);
        container.appendChild(this.element);
    }

    render(){
     const calendarEl = el('div', styles.calendarContainer);
     this.element.appendChild(calendarEl);
     
     const options = getCalendarOptions();
     const calendar = new FullCalendar.Calendar(calendarEl, options);
     calendar.render();
    }
    
    show() {this.element.style.display = 'block';}
    
    hide() {this.element.style.display = 'none';}

}
