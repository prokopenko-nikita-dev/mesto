import '../pages/index.css';
import {
    validatorConfig,
    popupEdit,
    popupAdd,
    popupEditAvatar,
    btnAddCard,
    btnEditProfile,
    btnEditAvatar,
    formAddCard,
    formEditAvatar
} from "../utils/constans.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js"
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Popup from '../components/Popup.js';
import Api from '../components/Api.js';
import PopupDelete from '../components/PopupDelete.js';

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-64',
    headers: {
        authorization: '395f55cb-af41-44d8-b340-ae79215baa0b',
        'Content-Type': 'application/json'
    }
});


//=========================================================================
//Данные пользователя
const userInfo = new UserInfo({
    userNameSelector: ".profile__edit-name",
    userJobSelector: ".profile__edit-prof",
    userAvatarSelector: ".profile__avatar"
})

// Создание попапа картинки с помощью класса PopupWithImage
//Клик по картинке
const popupWithImage = new PopupWithImage("#popup_img");
popupWithImage.setEventListeners();

function handleCardClick(name, link) {
    console.log(name, link)
    popupWithImage.open(name, link);
}

// создание попапа с удалением карточки 

const popupDeleteCard = new PopupDelete(
    "#popup_delete",
    (element) => {
        const submitText = popupDeleteCard.getSubmitText();
        popupDeleteCard.setLoadingText('Удаление...');
        api.deleteCard(element._id)
            .then(res => {
                popupDeleteCard.close();
                element.removeCard()
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                popupDeleteCard.setLoadingText(submitText);
            })
    }
);

popupDeleteCard.setEventListeners();

function handleDeleteCard(element) {
    popupDeleteCard.openPopup(element);
}

// Функция создания карточки из класса Card
function createCard(data) {
    const card = new Card(data, "#template", handleCardClick, handleDeleteCard, userInfo.getUserId(),
        function (id) {
            api.likeCard(id).then(res => {
                card.setLikes(res.likes)
                card.renderLikes()
            })
            .catch(err => {
                console.log(err);
            })
        }, function (id) {
            api.unlikeCard(id).then(res => {
                card.setLikes(res.likes)
                card.renderLikes()
            })
            .catch(err => {
                console.log(err);
            })
        });
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

Promise.all([api.getUser(), api.getInitialCards()])
// тут деструктурируете ответ от сервера, чтобы было понятнее, что пришло
  .then(([userData, cards]) => {
    userInfo.setUserInfo(userData);
    userInfo.setUserAvatar(userData.avatar);
    cardsSection.renderItems(cards);
      // тут установка данных пользователя
      // и тут отрисовка карточек
  })
  .catch(err => {
    console.log (err);
  });

// создание попапа с профилем с помощью класса PopupWithForm
const popupProfileWithForm = new PopupWithForm(
    "#popup_edit",
    (formValues) => {
        const data = {
            name: formValues["user-name"],
            info: formValues["user-prof"]
        }
        const submitText = popupProfileWithForm.getSubmitText();
        popupProfileWithForm.setLoadingText('Сохранение...')
        api.updateUserInfo(data.name, data.info)
            .then(res => {
                popupProfileWithForm.close();
                userInfo.setUserInfo(res);
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                popupProfileWithForm.setLoadingText(submitText);
            })
    }
);

popupProfileWithForm.setEventListeners();

// создание попапа с созданием карточек с помощью класса PopupWithForm
const popupCardWithForm = new PopupWithForm(
    "#popup_add",
    (formValues) => {
        const data = {
            name: formValues["title"],
            link: formValues["src"]
        };
        const submitText = popupCardWithForm.getSubmitText();
        console.log(submitText)
        popupCardWithForm.setLoadingText('Сохранение...');
        api.addCard(data.name, data.link)
        .then(res => {
            cardsSection.addItem(createCard(res))
            popupCardWithForm.close();
        })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                popupCardWithForm.setLoadingText(submitText);
            })
    }
);

popupCardWithForm.setEventListeners();

// создание попапа с редактированием профиля с помощью класса PopupWithForm
const popupAvatarWithForm = new PopupWithForm(
    "#popup_avatar",
    (data) => {
        const submitText = popupAvatarWithForm.getSubmitText();
        popupAvatarWithForm.setLoadingText('Сохранение...');
        api.editAvatar(data.link)
            .then(res => {
                userInfo.setUserAvatar(res.avatar)
                popupAvatarWithForm.close();
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                popupAvatarWithForm.setLoadingText(submitText);
            })
    }
);

popupAvatarWithForm.setEventListeners();


//  ============== Валидация всех модальных окон ===================

const formProfileValidate = new FormValidator(validatorConfig, popupEdit);
formProfileValidate.enableValidation();

const formAddCardValidate = new FormValidator(validatorConfig, popupAdd);
formAddCardValidate.enableValidation();

const formEditAvatarValidate = new FormValidator(validatorConfig, popupEditAvatar);
formEditAvatarValidate.enableValidation();

//кнопки 

btnEditProfile.addEventListener("click", function () {
    popupProfileWithForm.open();
    formProfileValidate.clearErrors();
    const data = userInfo.getUserInfo()
    popupProfileWithForm.setInputValues({ "user-name": data.name, "user-prof": data.job });
});

btnAddCard.addEventListener("click", function () {
    popupCardWithForm.open();
    formAddCardValidate.clearErrors();
});

btnEditAvatar.addEventListener("click", function () {
    popupAvatarWithForm.open();
    formEditAvatarValidate.clearErrors();
});