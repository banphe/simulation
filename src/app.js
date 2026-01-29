import { Router } from './core/router.js';
import { NavLink } from './components/navLink.js';
import { ROUTES } from './core/routes.js';
import { styles } from './styles/styles.js';
import { el } from './core/dom.js';

document.body.className = styles.body;

const container = el('div', styles.container);
const menu = el('div', styles.menu);

document.body.appendChild(container);
document.body.appendChild(menu);

const views = {};

ROUTES.forEach(route => {
    views[route.path] = new route.view(container);
    new route.presenter(views[route.path]);
    new NavLink(menu, route.path, route.label, route.icon);
});

Object.values(views).forEach(v => v.hide());

const router = new Router(views);
router.start();
