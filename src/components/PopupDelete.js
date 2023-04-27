import Popup from "./Popup.js"

export default class PopupDelete extends Popup {
    constructor(popupSelector, handleSubmit) {
        super(popupSelector);
        this._handleSubmit = handleSubmit;
        this._popupForm = this._popupElement.querySelector('.popup__content');
        this._popupSubmitButton = this._popupElement.querySelector('.popup__save-button');
    }

    setLoadingText(text) {
        this._popupSubmitButton.textContent = text;
    }

    getSubmitText() {
        return this._popupSubmitButton.textContent;
    }

    setEventListeners() {
        this._popupForm.addEventListener('submit', e => {
            e.preventDefault();
            this._handleSubmit(this._element);

        })
        super.setEventListeners();

    }

    openPopup(element) {
        this._element= element;
        super.open();
    }
}