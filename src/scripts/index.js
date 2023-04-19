import '../pages/index.css';
import {
    popupEdit,
    popupAdd,
    btnAddCard,
    btnEditProfile,
    initialCards,
    validatorConfig,
    fullImg,
    popupImg,
    nameImg,
    formAddCard,
} from "./data.js";
import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import Section from "./Section.js";
import PopupWithImage from "./PopupWithImage.js"
import PopupWithForm from './PopupWithForm.js';
import UserInfo from './UserInfo.js';
import Popup from './Popup.js';


//=========================================================================


// Создание попапа картинки с помощью класса PopupWithImage

//Клик по картинке
function handleCardClick(name, link) {
    const popupWithImage = new PopupWithImage(name, link, "#popup_img");
    popupWithImage.setEventListeners();
    popupWithImage.open();
}


btnEditProfile.addEventListener('click', function () {
    popupProfileWithForm.open();
    popupProfileWithForm.setInputValues();
});

btnAddCard.addEventListener('click', function () {
    popupCardWithForm.open();
    formAddCard.reset();
});
// Функция создания карточки из класса Card
function renderCard(data) {
    const card = new Card(data, "#template", handleCardClick);
    const cardElement = card.generateCard(data);
    return cardElement;
}

//создание секции с карточками через класс Section
const cardsSection = new Section({
    items: initialCards, renderer: (item) => {
        cardsSection.addItem(renderCard(item))
    }
},
    ".elements__list");
cardsSection.createElements();

//Данные пользователя
const userInfo = new UserInfo({
    userNameSelector: ".profile__edit-name",
    userJobSelector: ".profile__edit-prof"
})

// создание попапа с профилем с помощью класса PopupWithForm
const popupProfileWithForm = new PopupWithForm(
    "#popup_edit",
    (formValues) => {
        const data = {
            name: formValues["user-name"],
            info: formValues["user-prof"]
        }
        userInfo.setUserInfo(data.name, data.info);
        popupProfileWithForm.close();
    }
)
popupProfileWithForm.setEventListeners();

// создание попапа с созданием карточек с помощью класса PopupWithForm
const popupCardWithForm = new PopupWithForm(
    "#popup_add",
    (formValues) => {
        const data = {
            name: formValues["title"],
            link: formValues["src"]
        };
        console.log(data);
        cardsSection.addItem(renderCard(data));
        popupCardWithForm.close();
    }
)
popupCardWithForm.setEventListeners();
//  ============== Валидация всех модальных окон ===================

const formProfileValidate = new FormValidator(validatorConfig, popupEdit);
formProfileValidate.enableValidation();

const formAddCardValidate = new FormValidator(validatorConfig, popupAdd);
formAddCardValidate.enableValidation();