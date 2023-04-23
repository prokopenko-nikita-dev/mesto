export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
        this._popupElement = document.querySelector(popupSelector);
    }

    open() {
        this._popupElement.classList.add("popup_opened");
        document.addEventListener("keydown", this._handleEscClose.bind(this));
    }

    close() {
        this._popupElement.classList.remove("popup_opened");
        document.removeEventListener("keydown", this._handleEscClose);
    }

    _handleEscClose(e) {
        if (e.key === "Escape") {
            this.close();
        }
    } //закрытие окна по кнопке эскейп

    setEventListeners() {
        const closeButton = this._popupElement.querySelector(".popup__close");
        closeButton.addEventListener("click", () => {
            this.close();
        }); //кнопка закрытия попап окна крестик
        this._popupElement.addEventListener("mousedown", (e) => {
            if (e.target.classList.contains("popup_opened") || e.target.classList.contains("popup_close")) {
                this.close();
            }
        });//закрытие попап окна по клику на оверлей
    }
}
