import Popup from "./Popup.js"

export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleSubmitForm) {
        super(popupSelector);
        this._handleSubmitForm = handleSubmitForm;
    }

    _getInputValues() {
        const inputList = this._popupElement.querySelectorAll(".popup__input");
        const inputValues = {};
        inputList.forEach(input => {
            inputValues[input.name] = input.value
        })
        return inputValues
    }

    setInputValues() {
        let name = document.querySelector(".profile__edit-name" );
        let prof = document.querySelector(".profile__edit-prof");
        let inputName = document.querySelector(".popup__input_type_name");
        let inputProf = document.querySelector(".popup__input_type_prof");

        if (inputName && inputProf) {
            inputName.value = name.innerText;
            inputProf.value = prof.innerText
        }
    }

    setEventListeners() {
        console.log(this._form)
        super.setEventListeners();
        this._popupElement.addEventListener("submit", (e) =>{
            e.preventDefault();
            this._handleSubmitForm(this._getInputValues());
            this.close()
        })
    }

    close() {
        super.close();
        this._popupElement.querySelector("form").reset()
    }
}