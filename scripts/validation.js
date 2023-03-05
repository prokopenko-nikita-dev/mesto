/*const popupValidate = document.querySelector(".popup__content");
const inputs = popupValidate.querySelectorAll(".popup__input");


inputs.forEach(inputElement => {
    const isValid = inputElement.validity.valid;
    const inputSectionElement = inputElement.parentNode;
    const errorElement = inputSectionElement.querySelector(".popup__input-error");
    if (isValid) {
        errorElement.innerText = '';
        errorElement.classList.remove(".popup__input-error_active")
    } else {
        errorElement.innerText = inputElement.validationMessage;
        errorElement.classList.add(".popup__input-error_active");
    }
});*/