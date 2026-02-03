import { ParameterSet } from './models/parameterSet.js';
import { Calculator } from './core/Calculator.js';
import { SimulationView } from './views/simulationView.js';
import { SimulationPresenter } from './presenters/simulationPresenter.js';
import { NavBar } from './components/organisms/NavBar.js';
import { BottomNav } from './components/organisms/BottomNav.js';

document.body.classList.add('h-dvh', 'flex', 'flex-col', 'overflow-hidden', 'bg-gray-100');

const navBar = NavBar('daisyUI');
const root = document.createElement('div');
root.classList.add('flex', 'flex-col', 'flex-1', 'overflow-auto', 'p-4', 'gap-4', 'bg-gray-300', 'w-full', 'items-center');

const bottomNavBar = BottomNav([
    { path: 'home', text: 'Home', icon: 'fa-house' },
    { path: 'settings', text: 'Settings', icon: 'fa-cog' },
    { path: 'profile', text: 'Profile', icon: 'fa-user' }
]);

const model = new ParameterSet();
const calculator = new Calculator();
const view = new SimulationView();
const presenter = new SimulationPresenter(view, model, calculator);

document.body.append(navBar, root, bottomNavBar);
presenter.mount(root);
