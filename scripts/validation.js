const formCollection = document.querySelectorAll('.popup__content ') 

//  ==============  Валидация инпутов ===================
//  ==============  Текст ===================
const enableValidation = (form) => { 

  const inputGroupCollection = form.querySelectorAll('.popup__form-group')
  const submitButton = form.querySelector('.popup__save-button')

  const showError = (input, inputErrorSpan, errorMessage) => { 
    inputErrorSpan.classList.add('popup__input-error_active')
    inputErrorSpan.textContent = errorMessage
    input.classList.add('popup__input_invalid')
  }

  const hideError = (input, inputErrorSpan) => { 
    inputErrorSpan.classList.remove('popup__input-error_active')
    inputErrorSpan.textContent = ''
    input.classList.remove('popup__input_invalid')
  }

  const validateForm = () => {
    const valid = Array.from(form.querySelectorAll('.popup__input')).every(input => input.validity.valid)
    if (valid) { 
      submitButton.disabled = ''
      submitButton.classList.remove('popup__save-button_disabled')
    } else {
      submitButton.disabled = 'true'
      submitButton.classList.add('popup__save-button_disabled')
    }
  }

  Array.from(inputGroupCollection).forEach(group => {
    const popupInput = group.querySelector('.popup__input')
    const inputErrorSpan = group.querySelector(`.popup__input-error`)

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

//  =============================================

Array.from(formCollection).forEach(enableValidation) 