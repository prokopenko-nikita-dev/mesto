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
} from "../utils/constans.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js"
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Popup from '../components/Popup.js';


//=========================================================================

//Данные пользователя
const userInfo = new UserInfo({
    userNameSelector: ".profile__edit-name",
    userJobSelector: ".profile__edit-prof"
})

// Создание попапа картинки с помощью класса PopupWithImage
//Клик по картинке
const popupWithImage = new PopupWithImage("#popup_img");
popupWithImage.setEventListeners();

function handleCardClick(name, link) {
    console.log(name, link)
    popupWithImage.open(name, link);
}


btnEditProfile.addEventListener('click', function () {
    popupProfileWithForm.open();
    const data = userInfo.getUserInfo()
    popupProfileWithForm.setInputValues({"user-name": data.name, "user-prof": data.job});
});

btnAddCard.addEventListener('click', function () {
    popupCardWithForm.open();
    formAddCard.reset();
});

// Функция создания карточки из класса Card
function createCard(data) {
    const card = new Card(data, "#template", handleCardClick);
    const cardElement = card.generateCard(data);
    return cardElement;
}

//создание секции с карточками через класс Section
const cardsSection = new Section({
    renderer: (item) => {
        cardsSection.addItem(createCard(item))
    }
},
    ".elements__list");
cardsSection.renderItems(initialCards);

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
        cardsSection.addItem(createCard(data));
        popupCardWithForm.close();
    }
)
popupCardWithForm.setEventListeners();
//  ============== Валидация всех модальных окон ===================

const formProfileValidate = new FormValidator(validatorConfig, popupEdit);
formProfileValidate.enableValidation();

const formAddCardValidate = new FormValidator(validatorConfig, popupAdd);
formAddCardValidate.enableValidation();