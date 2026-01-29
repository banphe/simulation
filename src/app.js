import { Router } from './core/router.js';
import { NavLink } from './components/navLink.js';
import { ROUTES } from './core/routes.js';
import { styles } from './styles/styles.js';
import { el } from './core/dom.js';

document.body.className = styles.body;

const container = el('div', styles.container);
container.style.webkitOverflowScrolling = 'touch';
const menu = el('div', styles.menu);

const debugPanel = el('div');
debugPanel.style.cssText = 'position:fixed;top:0;left:0;background:black;color:lime;padding:8px;font-size:10px;z-index:9999;max-width:300px;';
document.body.appendChild(debugPanel);

const updateDebug = () => {
    const body = document.body;
    const html = document.documentElement;
    debugPanel.innerHTML = `
        HTML: ${html.clientHeight}px<br>
        Body: ${body.clientHeight}/${body.scrollHeight}px (scroll:${body.scrollTop})<br>
        Container: ${container.clientHeight}/${container.scrollHeight}px (scroll:${container.scrollTop})<br>
        Body overflow: ${getComputedStyle(body).overflow}<br>
        Container overflow: ${getComputedStyle(container).overflow}<br>
        Who scrolls: ${body.scrollHeight > body.clientHeight ? 'BODY' : (container.scrollHeight > container.clientHeight ? 'CONTAINER' : 'NONE')}
    `;
};
setInterval(updateDebug, 100);

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
