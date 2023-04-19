import Popup from "./Popup.js"

export default class PopupWithImage extends Popup {
    constructor(name, link, popupSelector) {
        super(popupSelector);
        this._name = name;
        this._link = link;
    }

    open() {
        this._popupElement.classList.add("popup_opened");
        let image = this._popupElement.querySelector(".popup__full-img");
        let description = this._popupElement.querySelector(".popup__name");
        image.src = this._link;
        image.alt = this._name;
        description.textContent = this._name;
    }
}