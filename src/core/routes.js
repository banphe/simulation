import { CalendarPresenter } from '../mvp/presenters/calendarPresenter.js';
import { ReportPresenter } from '../mvp/presenters/reportPresenter.js';
import { SimulationPresenter } from '../mvp/presenters/simulationPresenter.js';
import { CalendarView } from '../mvp/views/calendarView.js';
import { ReportView } from '../mvp/views/reportView.js';
import { SimulationView } from '../mvp/views/simulationView.js';

export const ROUTES = [
    { 
        path: '/calendar', 
        view: CalendarView,
        presenter: CalendarPresenter, 
        icon: 'calendar', 
        label: 'Calendar' 
    },
    { 
        path: '/report', 
        view: ReportView,
        presenter: ReportPresenter, 
        icon: 'report', 
        label: 'Report' 
    },
    { 
        path: '/simulation', 
        view: SimulationView,
        presenter: SimulationPresenter, 
        icon: 'simulation', 
        label: 'Simulation' 
    }
];