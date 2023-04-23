export default class Card {
    //конструктор карточки
    constructor(data, template, handleCardClick) {
        this._name = data.name;
        this._link = data.link;
        this._template = template;
        this._handleCardClick = handleCardClick;
    }

    _getTemplate() {
        const cardTemplate = document
            .querySelector(this._template)
            .content
            .querySelector(".cards")
            .cloneNode(true);

        return cardTemplate;
    }

    // создание карточки
    generateCard() {
        this._cardTemplate = this._getTemplate();

        this._textCard = this._cardTemplate.querySelector(".cards__info-heading");
        this._imageCard = this._cardTemplate.querySelector(".cards__img");
        this._dltButton = this._cardTemplate.querySelector(".cards__trash");
        this._likeButton = this._cardTemplate.querySelector(".cards__info-like");

        this._textCard.textContent = this._name;
        this._imageCard.src = this._link;
        this._imageCard.alt = this._name;

        this._setEventListeners()
        return this._cardTemplate;
    }

    _handleOpenPopup() {
        this._handleCardClick(this._name, this._link)
    }

    _handleClickLike() {
        console.log(this)
        this._likeButton.classList.toggle("cards__info-like_active");
    }

    _handleDelCard() {
        this._cardTemplate.remove();
        this._cardTemplate = null;
    }

    _setEventListeners() {
        this._imageCard.addEventListener("click", this._handleOpenPopup.bind(this));
        this._likeButton.addEventListener("click", this._handleClickLike.bind(this));
        this._dltButton.addEventListener("click", this._handleDelCard.bind(this));
    }
}
