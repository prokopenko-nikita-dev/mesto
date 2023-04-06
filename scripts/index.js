import {
    form,
    formEdit,
    formUserName,
    formUserDescription,
    formProfileValidate,
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
} from "./Data.js";

import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

//  ============== создание карточик из массива initialCard ===================

initialCards.forEach((item) => {
    const card = new Card(item, "#template");
    const cardElement = card.generateCard();

    newCard.prepend(cardElement);
});

//  ============== функция добавления новой карточки ===================


function addCard(name, link) {
    const card = new Card({ name: name, link: link }, "#template");
    const cardElement = card.generateCard();

    newCard.prepend(cardElement);
}


//  ============== закрытие попап по кнопке Esc ===================

function closeByEscape(e) {
    if (e.key === "Escape") {
        const popupOpened = document.querySelector(".popup_opened");
        closePopup(popupOpened);
    }
}

export function openPopup(popup) {
    popup.classList.add("popup_opened");
    document.addEventListener("keydown", closeByEscape);
}

function closePopup(popup) {
    popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", closeByEscape);
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

formProfileValidate.enableValidation();

function openEditProfile(e) {
    formUserName.value = userName.textContent;
    formUserDescription.value = userDescription.textContent;
    formProfileValidate.clearErrors();
    e.preventDefault();

    openPopup(popupEdit);
}

//  ============== Форма редактирования профиля  ===================

formEdit.addEventListener("submit", formEditProfileHandler);

function formEditProfileHandler(e) {
    e.preventDefault();

    const formUserNameData = formUserName.value;
    const formUserDescriptionData = formUserDescription.value;

    userName.textContent = formUserNameData;
    userDescription.textContent = formUserDescriptionData;

    closePopup(popupEdit);
}

//  ============== Форма добавления карточки ===================

form.addEventListener("submit", formAdd);

function formAdd(e) {
    e.preventDefault();
    const target = e.target;
    const name = target.querySelector("#text").value;
    const link = target.querySelector("#link").value;
    addCard(name, link);
    closePopup(popupAdd);
    target.reset();
}

//  ============== Валдидация формы добавления карточки ===================

btnAddCard.addEventListener("click", openPopupAdd);

function openPopupAdd(e) {
    e.preventDefault();

    openPopup(popupAdd);
    //validatePopup(popupAdd);
}

//  ============== Валидация всех модальных окон ===================

Array.from(formCollection).forEach((form) => {
    const validator = new FormValidator(validatorConfig, form);
    validator.enableValidation();
});