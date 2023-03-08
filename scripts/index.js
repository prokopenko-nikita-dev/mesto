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
const popup = document.querySelector(".popup");

const popupCls = document.querySelector(".popup__close");
//  ==================================================================


function validatePopup (popup) {
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

//  ============== popup edit ===================


function openPopup(popup) {
    popup.classList.add('popup_opened');
        
    popup.addEventListener("click", (evt) => {
        if (evt.target === evt.currentTarget || evt.target.classList.contains("popup__close")) {
            closePopup(evt.currentTarget);
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closePopup(popup)
        }
    });
}

function closePopup(popup) {
    popup.classList.remove("popup_opened");

}

btnEditProfile.addEventListener("click", () => {
    openPopup(popupEdit)
    formUserName.value = userName.textContent;
    formUserDescription.value = userDescription.textContent;
})

btnCloseEdit.addEventListener("click", () => {
    closePopup(popupEdit)
});
formEdit.addEventListener("submit", formEditProfileHandler);


function formEditProfileHandler(e) {
    e.preventDefault();

    const formUserNameData = formUserName.value;
    const formUserDescriptionData = formUserDescription.value;

    userName.textContent = formUserNameData;
    userDescription.textContent = formUserDescriptionData;

    closePopup(popupEdit)
}

//  ============== popup add ===================

btnAddCard.addEventListener("click", () => {
    openPopup(popupAdd)
    validatePopup(popupAdd)
})

btnCloseAdd.addEventListener("click", () => {
    closePopup(popupAdd)
})


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
    const newElement = template.content.cloneNode(true);
    const newElementTitle = newElement.querySelector('.cards__info-heading');
    newElementTitle.textContent = (item.name);
    const newElementPicture = newElement.querySelector('.cards__img');
    newElementPicture.src = (item.link);
    newElementPicture.alt = (item.name);
    newElementPicture.addEventListener("click", () => {
        fullImg.src = item.link
        fullImg.alt = item.name
        nameImg.textContent = item.name
        openPopup(popupImg)
    })

    const deleteButton = newElement.querySelector('.cards__trash');
    deleteButton.addEventListener('click', handleDelete);

    const likeBtn = newElement.querySelector(".cards__info-like");
    likeBtn.addEventListener('click', likeActive);

    return newElement;
}

const renderElement = (wrap, item) => {
    wrap.prepend(getElement(item));
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
    closePopup(popupAdd);
    evt.target.reset();
});

//  ============== popup открывания изображения полностью ===================

const popupImg = document.querySelector("#popup_img");
const btnCloseImg = document.querySelector(".popup__close_img");


btnCloseImg.addEventListener("click", () => {
    closePopup(popupImg)
})
