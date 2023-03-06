const formSelector = document.querySelector(".popup__content ");
const inputSelector = formSelector.querySelector(".popup__input ");
const inputErrorClass = formSelector.querySelector(".${inputSelector.id}-error");

//  ==============  Валидация инпутов ===================

inputSelector.array.forEach(inputSelector => {
    const showError = (input, errorMessage) => {
        input.classList.add("popup__input-error");
        inputErrorClass.textContent = errorMessage;
        inputErrorClass.classList.add("popup__input-error_active");
        }
        
        const hideError = (input) => {
            input.classList.remove("popup__input-error"); 
            inputErrorClass.classList.remove("popup__input-error_active");
            inputErrorClass.textContent = ''
        }
        const enableValidation = () => {
            if (!inputSelector.validity.valid) {
                showError(inputSelector, inputSelector.validationMessage);
            } else {
                hideError(inputSelector);
            }
        };
        
        inputSelector.addEventListener("input", function(evt) {
        enableValidation();
        })  
});