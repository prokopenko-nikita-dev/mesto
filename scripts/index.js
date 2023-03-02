//  ============== открытие/закрытие popup ===================
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
const popup = document.querySelector("popup");

//  ==================================================================

//  ============== popup edit ===================

btnEditProfile.addEventListener("click", () => {
function openPopup (popupEdit) {
    popup.classList.add('popup_opened');
  }
    formUserName.value = userName.textContent;       
    formUserDescription.value = userDescription.textContent;  
})

btnCloseEdit.addEventListener("click", closePopupEdit);
formEdit.addEventListener("submit", formEditProfileHandler);
function closePopup (popupEdit) {
    popup.classList.remove("popup_opened");
}

function formEditProfileHandler(e) {
    e.preventDefault();

   const formUserNameData = formUserName.value;
   const formUserDescriptionData = formUserDescription.value;

    userName.textContent = formUserNameData; 
    userDescription.textContent = formUserDescriptionData;

    closePopupEdit()
}

//  ============== popup add ===================

btnAddCard.addEventListener("click", () => {
    function openPopup (popupAdd) {
        popup.classList.add('popup_opened');
      }
})
btnCloseAdd.addEventListener("click", closePopupAdd);
function closePopup (popupAdd) {
    popup.classList.remove("popup_opened");
}

//  ============== Показать карточки из массива ===================

const newCard = document.querySelector('.elements__list');
const form = document.querySelector('.popup__content_add');
const template = document.querySelector('#template');

const fullImg = document.querySelector(".popup__full-img");
const nameImg = document.querySelector(".popup__name");


const handleDelete = (evt) => {
    evt.target.closest('.cards').remove();
}

const likeActive = (evt) => {
    evt.target.classList.toggle('cards__info-like_active');
  };

const getElement = (item) => {
const newElement = template.content.cloneNode( true );
const newElementTitle = newElement.querySelector('.cards__info-heading');
      newElementTitle.textContent = (item.name);
const newElementPicture = newElement.querySelector('.cards__img');
      newElementPicture.src = (item.link);
      newElementPicture.alt = (item.name);
      newElementPicture.addEventListener("click", () => {
        function openPopup (popupImg) {
            popup.classList.add('popup_opened');
          }
        fullImg.src = item.link
        fullImg.alt = item.name
        nameImg.textContent = item.name 
      })

const deleteButton = newElement.querySelector('.cards__trash');
      deleteButton.addEventListener('click', handleDelete);

const likeBtn = newElement.querySelector(".cards__info-like");
      likeBtn.addEventListener('click', likeActive);

    return newElement;
}

const renderElement = (wrap, item) => {
    wrap.prepend(getElement (item) );
}

initialCards.forEach((item) => {
    renderElement(newCard, item);
});

//  ============== Форма добаваления новой карточки ===================
const name = document.querySelector("#text");
const image = document.querySelector("#link");

form.addEventListener("submit", (evt) => {
    evt.preventDefault();

const item = { name: name.value, link: image.value };

    renderElement(newCard, item);
    closePopupAdd();
    evt.target.reset();
});

//  ============== popup открывания изображения полностью ===================

const popupImg = document.querySelector("#popup_img");
const btnCloseImg = document.querySelector(".popup__close_img");

function closePopup (popupImg) {
    popup.classList.remove("popup_opened");
}

btnCloseImg.addEventListener("click", closeImgPopup);
