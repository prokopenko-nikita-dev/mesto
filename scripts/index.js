//  ============== открытие/закрытие popup ===================

const popup = document.querySelector(".popup");
const popupBtnClose = document.querySelector(".popup__close");
const formEdit = document.querySelector(".popup__content_edit");
const formAdd = document.querySelector(".popup__content_add");

//  ============== редактирование  popup__edit ===================

const popupEdit = document.querySelector("#popup_edit");
const btnCloseEdit = document.querySelector(".popup__close_edit");
const btnEditProfile = document.querySelector(".profile__edit-profile");
const userName = document.querySelector(".profile__edit-name");
const userDescription = document.querySelector(".profile__edit-prof");

const formUserName = document.querySelector(".popup__input_type_name");
const formUserDescription = document.querySelector(".popup__input_type_prof");

//  ============== popup add-button ===================

const btnAddCard = document.querySelector(".profile__add-button");
const btnCloseAdd = document.querySelector(".popup__close_add");
const popupAdd = document.querySelector("#popup_add");
const cardsSection = document.querySelector(".elements");

//  ==================================================================

//  ============== popup edit ===================

btnEditProfile.addEventListener("click", () => {
    popupEdit.classList.add("popup_opened");
    formUserName.value = userName.textContent;       
    formUserDescription.value = userDescription.textContent;  
})

btnCloseEdit.addEventListener("click", closePopupEdit);
formEdit.addEventListener("submit", formEditProfileHandler);
function closePopupEdit() {
    popupEdit.classList.remove("popup_opened");
}

function formEditProfileHandler(e) {
    e.preventDefault();

    formUserNameData = formUserName.value;
    formUserDescriptionData = formUserDescription.value;

    userName.textContent = formUserNameData; 
    userDescription.textContent = formUserDescriptionData;

    closePopupEdit()
}

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

//  ============== popup add ===================

btnAddCard.addEventListener("click", () => {
    popupAdd.classList.add("popup_opened");
})
btnCloseAdd.addEventListener("click", closePopupAdd);
function closePopupAdd() {
    popupAdd.classList.remove("popup_opened");
}

//  ============== Показать карточки из массива ===================

const ul = document.querySelector('.elements__list');
const form = document.querySelector('.popup__content_add');
const template = document.querySelector('#template');

const fullImg = document.querySelector(".popup__full-img");
const nameImg = document.querySelector(".popup__name");


const handleDelete = (evt) => {
    evt.target.closest('.cards').remove();
}

const getElement = (item) => {
const newElement = template.content.cloneNode(true);
const newElementTitle = newElement.querySelector('.cards__info-heading');
      newElementTitle.textContent = (item.name);
const newElementPicture = newElement.querySelector('.cards__img');
      newElementPicture.src = (item.link);
      newElementPicture.addEventListener("click", () => {
        imgPopup.classList.add("popup_opened")
        fullImg.src = item.link
        nameImg.textContent = item.name 
      })

const deleteButton = newElement.querySelector('.cards__trash');
      deleteButton.addEventListener('click', handleDelete);

    return newElement;
}

const renderElement = (wrap, item) => {
    wrap.prepend(getElement(item));
}

initialCards.forEach((item) => {
    renderElement(ul, item);
});

//  ============== like ===================

cardsSection.addEventListener("click", (e) => {
    if (e.target.closest(".cards__info-like")) {
        e.target.closest(".cards__info-like").classList.toggle("cards__info-like_active");
    }
})

//  ============== Форма добаваления новой карточки ===================
form.addEventListener("submit", (evt) => {
    evt.preventDefault();

const name = document.querySelector("#text");
const image = document.querySelector("#link");

const item = { name: name.value, link: image.value };

    renderElement(ul, item);
    closePopupAdd();
    evt.target.reset();
});

//  ============== popup открывания изображения полностью ===================

const imgPopup = document.querySelector("#popup_img");
const btnCloseImg = document.querySelector(".popup__close_img");

const closeImgPopup = () => {
    imgPopup.classList.remove("popup_opened");
    fullImg.src = ""
}

btnCloseImg.addEventListener("click", closeImgPopup);
