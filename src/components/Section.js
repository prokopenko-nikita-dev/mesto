export default class Section {
    constructor(object, selector) {
        this._object = object;
        this._selector = selector;
        this._renderer = object.renderer;
        this._container = document.querySelector(this._selector);
    }

    renderItems(items) {
        items.forEach(element => {
            this._renderer(element)
        })
    }

    addItem(element) {
        this._container.prepend(element);
    }
}