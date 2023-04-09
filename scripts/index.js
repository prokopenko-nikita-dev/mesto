import {
    formAddCard,
    formEdit,
    inputUserNameFormProfile,
    inputUserDescriptionFormProfile,
    formCollection,
    popupEdit,
    popupAdd,
    popups,
    btnAddCard,
    btnEditProfile,
    userName,
    userDescription,
    initialCards,
    validatorConfig,
    newCard,
    formProfileValidate,
    formAddCardValidate
} from "./data.js";

import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import { openPopup, closePopup } from "./popupAction.js"

//  ============== создание карточик из массива initialCard ===================

function createCard(data) {
    const card = new Card({ name: data.name, link: data.link }, "#template");
    const cardElement = card.generateCard();
    return cardElement
}

function addCard(data, container, template) {
    container.prepend(createCard(data, template))
}

initialCards.forEach((item) => {
    addCard(item, newCard, "#template")
});

//  ============== Кнопка добавления карточки  ===================

btnAddCard.addEventListener("click", openPopupAdd);

function openPopupAdd(e) {
    e.preventDefault();
    formAddCardValidate.clearErrors();
    openPopup(popupAdd);
}

//  ============== функция добавления новой карточки ===================
formAddCard.addEventListener("submit", formAdd);

function formAdd(e) {
    e.preventDefault();
    const target = e.target;
    const name = target.querySelector("#text").value;
    const link = target.querySelector("#link").value;
    addCard({ name, link }, newCard, "#template");
    closePopup(popupAdd);
    target.reset();
}

//  ============== закрытие попап по Overlay ===================

popups.forEach((popup) => {
    popup.addEventListener("mousedown", (evt) => {
        if (
            evt.target.classList.contains("popup_opened") ||
            evt.target.classList.contains("popup__close")
        ) {
            closePopup(popup);
        }
    });
});

//  ============== Модальное окно с редактированием профиля ===================

btnEditProfile.addEventListener("click", openEditProfile);

function openEditProfile(e) {
    inputUserNameFormProfile.value = userName.textContent;
    inputUserDescriptionFormProfile.value = userDescription.textContent;
    formProfileValidate.clearErrors();
    e.preventDefault();

    openPopup(popupEdit);
}

//  ============== Форма редактирования профиля  ===================

formEdit.addEventListener("submit", formEditProfileHandler);

function formEditProfileHandler(e) {
    e.preventDefault();

    const formUserNameData = inputUserNameFormProfile.value;
    const formUserDescriptionData = inputUserDescriptionFormProfile.value;

    userName.textContent = formUserNameData;
    userDescription.textContent = formUserDescriptionData;

    closePopup(popupEdit);
}

//  ============== Валидация всех модальных окон ===================

Array.from(formCollection).forEach((formAdd) => {
    const validatorAdd = new FormValidator(validatorConfig, formAdd);
    validatorAdd.enableValidation();
});