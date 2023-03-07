const formSelector = document.querySelectorAll('.popup__content ')
//  ==============  Валидация инпутов ===================
//  ==============  Текст ===================
const enableValidation = (inputSelector) => {

    const inputErrorClass = document.querySelector(`#${inputSelector.name}-error`);
    const submitButtonSelector = document.querySelector(".popup__save-button");

    const showError = (input, errorMessage) => {
        inputErrorClass.textContent = errorMessage;
        inputSectionElement = inputSelector.parentNode;
        inputErrorClass.classList.add('popup__input-error_active');
        input.classList.add('popup__input_invalid');
        submitButtonSelector.disabled = 'true';
        submitButtonSelector.classList.add('popup__save-button_disabled');

    }

    const hideError = (input) => {
        inputErrorClass.classList.remove('popup__input-error_active')
        inputErrorClass.textContent = ''
        input.classList.remove('popup__input_invalid');
        submitButtonSelector.disabled = '';
        submitButtonSelector.classList.remove('popup__save-button_disabled');
    }

    inputSelector.addEventListener('input', function (evt) {
        console.log(evt)
        const input = evt.target
        if (!input.validity.valid) {
            showError(input, input.validationMessage)
        } else {
            hideError(input)
        }
    })
}

//  ==============  Кнопка ===================
/*let ValidBtn = true;
for (i = 0; i < input.lenght; i++) {
    const inputSelector = input[i];
    const isValid = inputSelector.validity.valid;
    if (!isValid) {
        ValidBtn = false;
        break;
    }
}

if (ValidBtn) {
    submitButtonSelector.disabled = '';
    submitButtonSelector.classList.remove('popup__save-button_disabled');
} else {
    submitButtonSelector.disabled = 'true';
    submitButtonSelector.classList.add('popup__save-button_disabled');
}*/

//  =============================================

Array.from(formSelector).forEach(form => {
    const inputSelector = form.querySelectorAll('.popup__input ')
    Array.from(inputSelector).forEach(enableValidation)
})

enableValidation({
    formSelector: '.popup__content ',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_disabled ',
    inputErrorClass: 'popup__input_type_error',
    errorClass: '.popup__input-error '
}); 
