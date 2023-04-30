export default class Card {
    //конструктор карточки
    constructor(data, template, handleCardClick, handleDeleteCard, ownerId, handleLike, handleUnlike) {
        this._name = data.name;
        this._link = data.link;
        this._template = template;
        this._handleCardClick = handleCardClick;
        this._likes = data.likes;
        this._id = data._id;
        this._handleDeleteCard = handleDeleteCard;
        this._ownerId = ownerId;
        this._cardOwner = data.owner._id;
        this._data = data;
        this._handleLike = handleLike;
        this._handleUnlike = handleUnlike;
    }

    _getTemplate() {
        const cardTemplate = document
            .querySelector(this._template)
            .content
            .querySelector(".cards")
            .cloneNode(true);

        return cardTemplate;
    }

    removeCard() {
        this._cardTemplate.remove();
        this._cardTemplate = null;
    }

    _handleDelCard() {
        this._handleDeleteCard(this);
    }

    // создание карточки
    generateCard() {
        this._cardTemplate = this._getTemplate();

        this._textCard = this._cardTemplate.querySelector(".cards__info-heading");
        this._imageCard = this._cardTemplate.querySelector(".cards__img");
        this._dltButton = this._cardTemplate.querySelector(".cards__trash");
        this._likeButton = this._cardTemplate.querySelector(".cards__info-like");
        this._counterLike = this._cardTemplate.querySelector(".cards__info-counter");

        this._textCard.textContent = this._name;
        this._imageCard.src = this._link;
        this._imageCard.alt = this._name;
        this._counterLike.textContent = this._likes.length;

        this._checkDeleteButton();
        this._setEventListeners();
        this.likeState();
        return this._cardTemplate;
    }

    _handleOpenPopup() {
        this._handleCardClick(this._name, this._link)
    }

    _handleClickLike() {
        console.log(this._cardOwner, this._ownerId, this._data)
        if (this.ownLike()) {
            this._handleUnlike(this._id)
        } else {
            this._handleLike(this._id)
        }
    }

    _checkDeleteButton() {
        if (this._cardOwner !== this._ownerId) {
            this._dltButton.classList.add('cards__trash_inactive');
        }
        else {
            this._dltButton.classList.remove('cards__trash_inactive');
        }
    }

    _setEventListeners() {
        this._imageCard.addEventListener("click", this._handleOpenPopup.bind(this));
        this._likeButton.addEventListener("click", this._handleClickLike.bind(this));
        this._dltButton.addEventListener("click", this._handleDelCard.bind(this));
    }

    ownLike() {
        return this._likes.some(like => {
            return like._id === this._ownerId;
        });
    }

    likeState() {
        if (this.ownLike()) {
            this._likeButton.classList.add('cards__info-like_active');
        }
        else {
            this._likeButton.classList.remove('cards__info-like_active');
        }
    }

    renderLikes() {
        this._counterLike.textContent = this._likes.length;
        this.likeState();
    }

    setLikes(newLikes) {
        this._likes = newLikes;
    }
}
