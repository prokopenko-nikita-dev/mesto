import Popup from "./Popup.js"

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._fullImg = this._popupElement.querySelector(".popup__full-img");
        this._description = this._popupElement.querySelector(".popup__name");
    }

    open(name, link) {
        super.open();
        this._fullImg.src = link;
        this._fullImg.alt = name;
        this._description.textContent = name;
    }
}