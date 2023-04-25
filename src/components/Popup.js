export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
        this._popupElement = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
        this._closeButton = this._popupElement.querySelector(".popup__close");
    }

    open() {
        this._popupElement.classList.add("popup_opened");
        document.addEventListener("keydown", this._handleEscClose);
    }

    close() {
        this._popupElement.classList.remove("popup_opened");
        document.removeEventListener("keydown", this._handleEscClose);
    }

    _handleEscClose(e) {
        if (e.key === "Escape") {
            this.close();
        }
    }

    setEventListeners() {
        this._closeButton.addEventListener("click", () => {
            this.close();
        });
        this._popupElement.addEventListener("mousedown", (e) => {
            if (e.target.classList.contains("popup_opened")) {
                this.close();
            }
        });
    }
}
