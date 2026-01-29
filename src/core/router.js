export class Router {
    constructor(views) {this.views = views;}

    start() {
        window.addEventListener('hashchange', this.changeView.bind(this));
        this.changeView();
    }

    changeView() {
        const path = window.location.hash.slice(1) || '/calendar';
        const ev = new CustomEvent('routechange', { detail: { path } });
        window.dispatchEvent(ev);
        Object.values(this.views).forEach(v => v.hide());
        const view = this.views[path];
        if (view) {view.show();}
    }
}
