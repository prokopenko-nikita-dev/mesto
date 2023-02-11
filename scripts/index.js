const popup = document.querySelector(".popup");
const popupBtnClose = document.querySelector(".popup__close");
const formEditProfile = document.querySelector(".popup__content");

const btnEditProfile = document.querySelector(".profile__edit-profile");
let btnEditProfileSave = document.querySelector(".popup__save-button");
let cardsSection = document.querySelector(".elements");

const userName = document.querySelector(".profile__edit-name");
const userDescription = document.querySelector(".profile__edit-prof");

const formUserName = document.querySelector(".popup__input_type_name");
const formUserDescription = document.querySelector(".popup__input_type_prof");

btnEditProfile.addEventListener("click", () => {
    popup.classList.add("popup_opened");
    formUserName.value = userName.textContent;
    formUserDescription.value = userDescription.textContent;
})

popupBtnClose.addEventListener("click", closePopup);

formEditProfile.addEventListener("submit", formEditProfileHandler);

function closePopup () {
    popup.classList.remove("popup_opened");
}

function formEditProfileHandler(e) {
    e.preventDefault();

    formUserNameData = formUserName.value;
    formUserDescriptionData = formUserDescription.value;

    document.querySelector(".profile__edit-name").textContent = formUserNameData;
    document.querySelector(".profile__edit-prof").textContent = formUserDescriptionData;

    closePopup()
}