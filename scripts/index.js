const popup = document.querySelector(".popup");
const popupBtnClose = document.querySelector(".popup__close");
const formEditProfile = document.querySelector(".popup__content");

const btnEditProfile = document.querySelector(".profile__edit-profile");
const btnEditProfileSave = document.querySelector(".popup__save-button");
const cardsSection = document.querySelector(".elements");

btnEditProfile.addEventListener("click", () => {
    popup.classList.add("popup_opened");

    const userName = document.querySelector(".profile__edit-name").textContent;
    const userDescription = document.querySelector(".profile__edit-prof").textContent;

    const formUserName = document.querySelector(".popup__input_type_name");
    const formUserDescription = document.querySelector(".popup__input_type_prof");

    formUserName.value = userName;
    formUserDescription.value = userDescription;
})

popupBtnClose.addEventListener("click", () => {
    popup.classList.remove("popup_opened");
  });

formEditProfile.addEventListener("submit", formEditProfileHandler);

function formEditProfileHandler(e) {
    e.preventDefault();

    const formUserNameData = document.querySelector(".popup__input_type_name").value;
    const formUserDescriptionData = document.querySelector(".popup__input_type_prof").value;

    document.querySelector(".profile__edit-name").textContent = formUserNameData;
    document.querySelector(".profile__edit-prof").textContent = formUserDescriptionData;

    popup.classList.remove("popup_opened");
}
