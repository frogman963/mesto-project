import {initialCards} from './initialCards.js';
import {openPopup} from './utils.js';
import{popupScalingPicture} from './modal.js'
import { renderCard } from './utils.js';


const bigPicture = document.querySelector(".popup__picture");
const bigPictureDescription = document.querySelector(".popup__discription");
const elementsList = document.querySelector(".elements");
const elementTemplate = document.querySelector("#element-template").content;

function createCard(card) {
    const elementCard = elementTemplate.querySelector(".element").cloneNode(true);
    const cardText = elementCard.querySelector(".element__text");
    const cardImage = elementCard.querySelector(".element__picture");
    const cardlikeButton = elementCard.querySelector(".element__like");
    const carddeleteButton = elementCard.querySelector(".element__delete");
  
    cardImage.alt = card.name;
    cardImage.src = card.link;
    cardText.textContent = card.name;
  
    cardlikeButton.addEventListener("click", cardlikeButtonActive);
    carddeleteButton.addEventListener("click", deleteButtonActive);
    cardImage.addEventListener("click", () => callThirdPopup(card.name, card.link));
    return elementCard;
  }
  
  function callThirdPopup(name, link) {
    bigPicture.alt = name;
    bigPicture.src = link;
    bigPictureDescription.textContent = name;
    openPopup(popupScalingPicture);
  }
  const cardlikeButtonActive = (e) => e.target.closest(".element__like").classList.toggle("element__like_active");

  //функция на удаление карточки
  const deleteButtonActive = (e) => e.target.closest(".element").remove();
  
  // Создание карточек
  initialCards.forEach((element) => renderCard(createCard(element)));  


  export{ createCard , elementsList }