import '../pages/index.css';
import { createCard ,} from './card.js'
import  {popupformEditProfile,buttonEdit,popupCreateCard, addButton} from './modal.js';
import {setEventListeners} from './validate.js';
import { openPopup, closePopup , isProtocolLink ,renderCard } from './utils';


const formEditProfile = popupformEditProfile.querySelector(".form");
const formEditProfileFieldLogin = popupformEditProfile.querySelector("input[name='name']");
const formEditProfileFieldDescription = popupformEditProfile.querySelector("input[name='hobby']");

const profileName = document.querySelector(".profile__name");
const profileDiscription = document.querySelector(".profile__discription");

const buttonClosePopupCreateCard = popupCreateCard.querySelector("#btnclose2");
const formCreateCard = popupCreateCard.querySelector("#form2");
const formCreateCardFieldTitle = popupCreateCard.querySelector("input[name='name']");
const formCreateCardFieldLink = popupCreateCard.querySelector("input[name='link']");

function whriteDataformEditProfile() {
  formEditProfileFieldLogin.value = profileName.textContent;
  formEditProfileFieldDescription.value = profileDiscription.textContent;
}

function preparationEditPopup() {
  whriteDataformEditProfile();
  openPopup(popupformEditProfile);
}

function formEditProfileHandler(e) {
  e.preventDefault();

  profileName.textContent = formEditProfileFieldLogin.value;
  profileDiscription.textContent = formEditProfileFieldDescription.value;

  closePopup(popupformEditProfile);
}

function formCreateCardHandler(e) {
  e.preventDefault();

  const link = formCreateCardFieldLink.value;

  if (!isProtocolLink(link)) return;

  renderCard(createCard({ name: formCreateCardFieldTitle.value, link }));
  closePopup(popupCreateCard);
  
  
}

function openPopupCreateCard() {
  formCreateCard.reset(); 
  openPopup(popupCreateCard)
}


buttonEdit.addEventListener("click", preparationEditPopup);
addButton.addEventListener("click", openPopupCreateCard);
formEditProfile.addEventListener("submit", formEditProfileHandler);
formCreateCard.addEventListener("submit", formCreateCardHandler);

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.form'));
  formList.forEach((formElement) => {
    setEventListeners(formElement);
  });
};
enableValidation();




