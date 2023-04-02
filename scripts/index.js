import {
    formEdit,
    popupEdit,
    form,
    btnEditProfile,
    formCollection,
    userName,
    template,
    userDescription,
    formUserName,
    formUserDescription,
    btnAddCard,
    popupAdd,
    popups,
    initialCards,
    validatorConfig
} from './data.js';

import { Card } from './card.js';
import { FormValidator } from './validation.js';

function addCard(name, link) {
    const card = new Card({ name: name, link: link }, '#template');
    const cardElement = card.generateCard();
    document.querySelector('.elements__list').prepend(cardElement);
}

initialCards.forEach((item) => {
    const card = new Card(item, '#template');
    const cardElement = card.generateCard();

    document.querySelector('.elements__list').prepend(cardElement);
});


// ============== проверяет валидность формы при открытии попап ==============

function validatePopup(popup) {
    const form = popup.querySelector('form')
    if (!form) return
    const inputCollection = form.querySelectorAll('.popup__input')
    const submitButton = form.querySelector('.popup__save-button')
    const formIsInvalid = Array.from(inputCollection).some(input => !input.validity.valid)
    if (formIsInvalid) {
        submitButton.disabled = 'form'
        submitButton.classList.add('popup__save-button_disabled')
    }
}

//  ============== закрытие попап по кнопке Esc ===================

const closeByEscape = (evt) => {
    if (evt.key === "Escape") {
        const popupOpened = document.querySelector(".popup_opened");
        closePopup(popupOpened);
    }
}

export function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closeByEscape);
}

function closePopup(popup) {
    popup.classList.remove("popup_opened");
    document.removeEventListener('keydown', closeByEscape);
}


//  ============== закрытие попап по Overlay ===================

popups.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
            closePopup(popup)
        }
        if (evt.target.classList.contains('popup__close')) {
            closePopup(popup)
        }
    })

})

//  ============== кнопка открытия попап окна edit и редактирование ===================

btnEditProfile.addEventListener("click", () => {
    openPopup(popupEdit)
    formUserName.value = userName.textContent;
    formUserDescription.value = userDescription.textContent;
})

formEdit.addEventListener("submit", formEditProfileHandler);


function formEditProfileHandler(e) {
    e.preventDefault();

    const formUserNameData = formUserName.value;
    const formUserDescriptionData = formUserDescription.value;

    userName.textContent = formUserNameData;
    userDescription.textContent = formUserDescriptionData;

    closePopup(popupEdit)
}

//  ============== кнопка открытия окна добавления новой карточки  ADD ===================

btnAddCard.addEventListener("click", () => {
    openPopup(popupAdd)
    validatePopup(popupAdd)
})

//  ============== Показать карточки из массива ===================
const getElement = (item) => {
    const newElement = template.content.cloneNode(true);
    const newElementTitle = newElement.querySelector('.cards__info-heading');
    newElementTitle.textContent = (item.name);
    const newElementPicture = newElement.querySelector('.cards__img');
    newElementPicture.src = (item.link);
    newElementPicture.alt = (item.name);

    return newElement;
}

const renderElement = (wrap, item) => {
    wrap.prepend(getElement(item));
}

form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const target = evt.target
    const name = target.querySelector('#text').value
    const link = target.querySelector('#link').value
    addCard(name, link)
    closePopup(popupAdd)
    target.reset();
})
Array.from(formCollection).forEach(form => {
    const validator = new FormValidator(validatorConfig, form)
    validator.enableValidation()
})