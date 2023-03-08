const formSelector = document.querySelectorAll('.popup__content ')
const inputSelector = form.querySelectorAll('.popup__input')
const submitButtonSelector = form.querySelectorAll(".popup__save-button");
const errorClass = form.querySelectorAll('.popup__input-error');

//  ==============  Валидация инпутов ===================
//  ==============  Текст ===================
const enableValidation = (inputSelector) => {
    
    const inputErrorClass = document.querySelector(`#${inputSelector.name}-error`);

    const showError = (input, errorMessage) => {
        inputErrorClass.textContent = errorMessage;
        inputSectionElement = inputSelector.parentNode;
        errorClass.classList.add('popup__input-error_active');
        input.classList.add('popup__input_invalid');
        submitButtonSelector.disabled = 'true';
        submitButtonSelector.classList.add('popup__save-button_disabled');

    }

    const hideError = (input) => {
        errorClass.classList.remove('popup__input-error_active')
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

//  =============================================

Array.from(formSelector).forEach(form => {
    Array.from(inputSelector).forEach(enableValidation);
})

/*
enableValidation({
    formSelector: '.popup__content ',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_disabled ',
    inputErrorClass: 'popup__input_type_error',
    errorClass: '.popup__input-error '
}); */