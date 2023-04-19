export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
        this._popupElement = document.querySelector(popupSelector);
    }

    open() {
        this._popupElement.classList.add("popup_opened");
    }

    close() {
        this._popupElement.classList.remove("popup_opened");
    }

    _handleEscClose(e) {
        if (e.key === "Escape") {
            document.removeEventListener("keydown", this._handleEscClose);
            this.close();
        }
    } //закрытие окна по кнопке эскейп

    setEventListeners() {
        let closeButton = this._popupElement.querySelector(".popup__close");
        closeButton.addEventListener("click", () => {
            this.close();
        }); //кнопка закрытия попап окна крестик
        document.addEventListener("keydown", (e) =>{
            this._handleEscClose(e);
        }); //закрытие попап окна по эскейпу
        this._popupElement.addEventListener("mousedown", (e) => {
            if (e.target.classList.contains("popup_opened") || e.target.classList.contains("popup_close")){
                this.close();
            }
        }) //закрытие попап окна по клику на оверлей
    }
}
