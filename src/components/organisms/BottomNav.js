import { el } from '../../utils/dom.js';
import { NavLink } from '../atoms/NavLink.js';

export const BottomNav = (links) => {
    const nav = el('div', 'bg-white p-3 flex justify-evenly shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]');
    links.forEach(({ path, text, icon }) => nav.appendChild(NavLink(path, text, icon)));
    return nav;
};
