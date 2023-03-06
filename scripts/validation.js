const formSelector = document.querySelectorAll('.popup__content ')
//  ==============  Валидация инпутов ===================

const enableValidation = (inputSelector) => {

    const inputErrorClass = document.querySelector(`#${inputSelector.name}-error`)
  
    const showError = (input, errorMessage) => {
      // input.classList.add('popup__input-error')
      inputErrorClass.textContent = errorMessage;
      inputErrorClass.classList.add('popup__input-error_active');
      input.classList.add('popup__input_invalid');
    }
  
    const hideError = (input) => {
      // input.classList.remove('popup__input-error')
      inputErrorClass.classList.remove('popup__input-error_active')
      inputErrorClass.textContent = ''
      input.classList.remove('popup__input_invalid');
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
  
  Array.from(formSelector).forEach(form => {
    const inputSelector = form.querySelectorAll('.popup__input ')
    Array.from(inputSelector).forEach(enableValidation)
  }) 
  