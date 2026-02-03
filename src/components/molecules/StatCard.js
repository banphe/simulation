import { el } from '../../utils/dom.js';

export const StatCard = (title, color) => {
    const stat = el('div', `stat border border-gray-300 bg-${color}-50 flex-1`);
    const titleEl = el('div', 'stat-title', title);
    const valueEl = el('div', `stat-value text-2xl text-${color}-700`, '0');
    stat.append(titleEl, valueEl);
    return { element: stat, value: valueEl };
};
