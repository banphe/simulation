import { el } from '../../utils/dom.js';

export const ButtonGroup = (...buttons) => {
    const join = el('div', 'join');
    join.append(...buttons);
    return join;
};
