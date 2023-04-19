export default class Section {
    constructor(object, selector){
        this._object = object;
        this._selector = selector;
        this._items = object.items;
        this._renderer = object.renderer;
    }

    createElements(){
    this._items.forEach(element => {
        this._renderer(element)
    }) 
    }

    addItem (element){
        const container = document.querySelector(this._selector);
        container.prepend(element);
    } 
}