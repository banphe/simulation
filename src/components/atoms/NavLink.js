import { el, toggleClass } from '../../utils/dom.js';

export const NavLink = (path, text, iconName) => {
    const link = el('a', 'btn btn-ghost flex flex-col items-center gap-1 px-3 py-2 rounded-md');
    link.href = `#${path}`;
    
    const icon = el('i', `text-xl fa-solid ${iconName}`);
    const textEl = el('span', 'text-xs font-bold', text);
    
    link.append(icon, textEl);
    
    window.addEventListener('hashchange', () => 
        toggleClass(link, 'btn-active', window.location.hash === `#${path}`)
    );
    
    return link;
};
