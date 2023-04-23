//  ============== Глобальные переменные для валидации ===================

export const validatorConfig = {
  inputGroup: `.popup__form-group`,
  submitButton: ".popup__save-button",
  inputErrorActive: "popup__input-error_active",
  inputErrorLine: "popup__input_invalid",
  buttonSaveDisabled: "popup__save-button_disabled",
  popupInput: ".popup__input",
  popupInputError: ".popup__input-error",
};


//создаем экземпляр формы
export const formCollection = document.querySelectorAll(".popup__content");
// открытие/закрытие popup
export const formEdit = document.querySelector(".popup__content_edit");
export const formAddCard = document.querySelector(".popup__content_add");

// редактирование  popup__edit

export const popupEdit = document.querySelector("#popup_edit");
export const btnEditProfile = document.querySelector(".profile__edit-profile");
export const userName = document.querySelector(".profile__edit-name");
export const userDescription = document.querySelector(".profile__edit-prof");
export const inputUserNameFormProfile = document.querySelector(".popup__input_type_name");
export const inputUserDescriptionFormProfile = document.querySelector(".popup__input_type_prof");

// popup add-button

export const btnAddCard = document.querySelector(".profile__add-button");
export const popupAdd = document.querySelector("#popup_add");
export const cardsSection = document.querySelector(".elements");
export const groupPopups = document.querySelector(".popup");
export const popupClose = document.querySelector(".popup__close");
export const popups = document.querySelectorAll(".popup");
export const popupImg = document.querySelector("#popup_img");

// показать карточки из массива

export const newCard = document.querySelector(".elements__list");
export const template = document.querySelector("#template");
export const fullImg = document.querySelector(".popup__full-img");
export const nameImg = document.querySelector(".popup__name");
export const textInput = document.querySelector("#text");
export const imageLink = document.querySelector("#link");

//  ============== Массив с данными ===================

export const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];
