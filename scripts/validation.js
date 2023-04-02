export {FormValidator}

export default class FormValidator {
    constructor(config, form) {
        this._config = config
        this._inputGroupCollection = Array.from(form.querySelectorAll(config.inputGroup))
        this._submitButton = form.querySelector(config.submitButton)
    }

    enableValidation() {
        this._inputGroupCollection.forEach(inputGroup => {
            const input = inputGroup.querySelector(this._config.popupInput)
            input.addEventListener('input', evt => {
                const _input = evt.target
                if (!_input.validity.valid) {
                    this._showError(inputGroup, _input.validationMessage)
                } else {
                    this._hideError(inputGroup)
                }
                this._validate()
            })
        })
    }

    _showError(inputGroup, msg) {
        const errorSpan = inputGroup.querySelector(this._config.popupInputError)
        const input = inputGroup.querySelector(this._config.popupInput)
        errorSpan.classList.add(this._config.inputErrorActive)
        errorSpan.textContent = msg
        input.classList.add(this._config.inputErrorLine)
    }

    _hideError(inputGroup) {
        const errorSpan = inputGroup.querySelector(this._config.popupInputError)
        const input = inputGroup.querySelector(this._config.popupInput)
        errorSpan.classList.remove(this._config.inputErrorActive)
        errorSpan.textContent = ''
        input.classList.remove(this._config.inputErrorLine)
    }

    _validate() {
        const valid = this._inputGroupCollection.every(inputGroup => {
            const input = inputGroup.querySelector(this._config.popupInput)
            return input.validity.valid
        })
        if (valid) {
            this._submitButton.disabled = ''
            this._submitButton.classList.remove(this._config.buttonSaveDisabled)
        } else {
            this._submitButton.disabled = 'true'
            this._submitButton.classList.add(this._config.buttonSaveDisabled)
        }
    }
}
