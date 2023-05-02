import Popup from "./Popup.js"

export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleSubmitForm) {
        super(popupSelector);
        this._handleSubmitForm = handleSubmitForm;
        this._inputList = this._popupElement.querySelectorAll(".popup__input");
        this._popupFormElement = this._popupElement.querySelector("form");
        this._submitBtn = this._popupElement.querySelector(".popup__save-button");
    }

    _getInputValues() {
        const inputValues = {};
        this._inputList.forEach(input => {
            inputValues[input.name] = input.value
        })
        return inputValues
    }

    setInputValues(inputValue) {
        this._inputList.forEach((input) => {
            input.value = inputValue[input.name]
        })
    }

    setLoadingText(text) {
        this._submitBtn.innerText = text;
    }

    getSubmitText() {
        return this._submitBtn.innerText;
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupElement.addEventListener("submit", (e) => {
            e.preventDefault();
            this._handleSubmitForm(this._getInputValues());
        })
    }

    close() {
        super.close();
        this._popupFormElement.reset();
    }
}