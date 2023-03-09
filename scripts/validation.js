enableValidation({
    formCollection: '.popup__content',
    inputGroupCollection: '.popup__form-group', 
    submitButton: '.popup__save-button',
    inputErrorActive: 'popup__input-error_active',
    inputErrorLine: 'popup__input_invalid',
    buttonSaveDisabled: 'popup__save-button_disabled',
    popupInput: '.popup__input',
    popupInputError: '.popup__input-error'
  });

function enableValidation (config) {
    const formCollection = document.querySelectorAll(config.formCollection)

    const Validation = (form) => {
    
        const inputGroupCollection = form.querySelectorAll(config.inputGroupCollection)
        const submitButton = form.querySelector(config.submitButton)
    
        const showError = (input, inputErrorSpan, errorMessage) => {
            inputErrorSpan.classList.add(config.inputErrorActive)
            inputErrorSpan.textContent = errorMessage
            input.classList.add(config.inputErrorLine)
        }
    
        const hideError = (input, inputErrorSpan) => {
            inputErrorSpan.classList.remove(config.inputErrorActive)
            inputErrorSpan.textContent = ''
            input.classList.remove(config.inputErrorLine)
        }
    
        const validateForm = () => {
            const valid = Array.from(form.querySelectorAll(config.popupInput)).every(input => input.validity.valid)
            if (valid) {
                submitButton.disabled = ''
                submitButton.classList.remove(config.buttonSaveDisabled)
            } else {
                submitButton.disabled = 'true'
                submitButton.classList.add(config.buttonSaveDisabled)
            }
        }
        Array.from(inputGroupCollection).forEach(group => {
            const popupInput = group.querySelector(config.popupInput)
            const inputErrorSpan = group.querySelector(config.popupInputError)
    
            popupInput.addEventListener('input', function (evt) {
                console.log(evt)
                const input = evt.target
                if (!input.validity.valid) {
                    showError(input, inputErrorSpan, input.validationMessage)
                } else {
                    hideError(input, inputErrorSpan)
                }
                validateForm()
            })
        })
    }
    
    Array.from(formCollection).forEach(Validation)
}