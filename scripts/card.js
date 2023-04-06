import {
    fullImg,
    popupImg,
    nameImg
} from './Data.js';

import { openPopup } from './Index.js';

export { Card }


class Card {
    //конструктор карточки
    constructor(data, template, handlerCardClick) {
        this._name = data.name;
        this._link = data.link;
        this._template = template;
        this._handlerCardClick = handlerCardClick;
    }

    _getTemplate() {
        const cardTemplate = document
            .querySelector(this._template)
            .content
            .querySelector('.cards')
            .cloneNode(true);

        return cardTemplate;
    }

    // создание карточки
    generateCard() {
        this._cardTemplate = this._getTemplate();

        this._textCard = this._cardTemplate.querySelector('.cards__info-heading');
        this._imageCard = this._cardTemplate.querySelector('.cards__img');
        this._dltButton = this._cardTemplate.querySelector('.cards__trash');
        this._likeButton = this._cardTemplate.querySelector('.cards__info-like');

        this._textCard.textContent = this._name;
        this._imageCard.src = this._link;
        this._imageCard.alt = this._name;


        this._setEventListeners()
        return this._cardTemplate;
    }

    //слушатель на действия карточки
    _setEventListeners() {
        this._imageCard.addEventListener('click', () => {
            fullImg.src = this._link;
            fullImg.alt = this._name;
            nameImg.textContent = this._name
            openPopup(popupImg)
        });
        this._dltButton.addEventListener('click', (evt) => {
            evt.target.closest('.cards').remove()
            event.stopPropagation();
        });
        this._likeButton.addEventListener('click', (evt) =>{
            evt.target.classList.toggle('cards__info-like_active')
            event.stopPropagation();
        })
    };

    render() {

    }
}

