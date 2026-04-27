import { NavBar } from './components/organisms/NavBar.js';
import { BottomNav } from './components/organisms/BottomNav.js';
import { CalendarView } from './views/calendarView.js';
import { ReportView } from './views/reportView.js';
import { SimulationView } from './views/simulationView.js';
import { CalendarPresenter } from './presenters/calendarPresenter.js';
import { ReportPresenter } from './presenters/reportPresenter.js';
import { SimulationPresenter } from './presenters/simulationPresenter.js';
import { NavLink } from './components/atoms/NavLink.js';

document.body.classList.add('h-dvh', 'flex', 'flex-col', 'overflow-hidden', 'bg-gray-100');

const navBar = NavBar('daisyUI');
const root = document.createElement('div');
root.classList.add('flex', 'flex-col', 'flex-1', 'overflow-auto', 'p-2', 'gap-2', 'bg-gray-300', 'w-full', 'items-center');
document.body.append(navBar, root);

const calV = new CalendarView(root);
const chatV = new ReportView(root);
const simV = new SimulationView(root);

const calLnk = NavLink(calV, 'Calendar', 'fa-calendar');
const chatLnk = NavLink(chatV, 'Report', 'fa-chart-line');
const simLnk = NavLink(simV, 'Simulation', 'fa-calculator');

new CalendarPresenter(calV);
new ReportPresenter(chatV);
new SimulationPresenter(simV);

window.location.hash ||= '#/calendar';

const bottomNavBar = BottomNav([calLnk, chatLnk, simLnk]);
document.body.append(bottomNavBar);

