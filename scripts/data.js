export {formEdit, 
    form, 
    popupEdit, 
    btnEditProfile, 
    userName, 
    userDescription, 
    formUserName,
    formUserDescription,
    formCollection,
    btnAddCard, 
    popupAdd, 
    cardsSection, 
    popup,
    popupCls, 
    popups, 
    popupImg, 
    newCard, 
    template, 
    fullImg, 
    nameImg, 
    name, 
    image, 
    initialCards,
    validatorConfig}

//  ============== Глобальные перменные  для функционала страницы ===================

const formCollection = document.querySelectorAll('.popup__content');
// открытие/закрытие popup
const formEdit = document.querySelector('.popup__content_edit');
const form = document.querySelector('.popup__content_add');

// редактирование  popup__edit

const popupEdit = document.querySelector('#popup_edit');
const btnEditProfile = document.querySelector('.profile__edit-profile');
const userName = document.querySelector('.profile__edit-name');
const userDescription = document.querySelector('.profile__edit-prof');
const formUserName = document.querySelector('.popup__input_type_name');
const formUserDescription = document.querySelector('.popup__input_type_prof');

// popup add-button

const btnAddCard = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('#popup_add');
const cardsSection = document.querySelector('.elements');
const popup = document.querySelector('.popup');
const popupCls = document.querySelector('.popup__close');
const popups = document.querySelectorAll('.popup') 
const popupImg = document.querySelector('#popup_img');

// показать карточки из массива

const newCard = document.querySelector('.elements__list');
const template = document.querySelector('#template');
const fullImg = document.querySelector('.popup__full-img');
const nameImg = document.querySelector('.popup__name');
const name = document.querySelector('#text');
const image = document.querySelector('#link');

//  ============== Массив с данными ===================

const initialCards = [{
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
},
{
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
},
{
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
},
{
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
},
{
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
},
{
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
}
];

//  ============== Глобальные переменные для валидации ===================

const validatorConfig = {
    inputGroup:`.popup__form-group`,
    submitButton: '.popup__save-button',
    inputErrorActive: 'popup__input-error_active',
    inputErrorLine: 'popup__input_invalid',
    buttonSaveDisabled: 'popup__save-button_disabled',
    popupInput: '.popup__input',
    popupInputError: '.popup__input-error'
  };
