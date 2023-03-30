//first popup
const buttonEdit = document.querySelector(".profile__edit-button");
const popupformEditProfile = document.querySelector("#popup1");

const formEditProfile = popupformEditProfile.querySelector(".form");
const formEditProfileFieldLogin = popupformEditProfile.querySelector("input[name='name']");
const formEditProfileFieldDescription = popupformEditProfile.querySelector("input[name='hobby']");
// const formEditProfileBtnHandler = popupformEditProfile.querySelector(".form__button-safe");

// Куда вставляем данные
const profileName = document.querySelector(".profile__name");
const profileDiscription = document.querySelector(".profile__discription");

// second popup
const addButton = document.querySelector(".profile__add-button");
const popupCreateCard = document.querySelector("#popup2");
const buttonClosePopupCreateCard = popupCreateCard.querySelector("#btnclose2");
const formCreateCard = popupCreateCard.querySelector("#form2");
const formCreateCardFieldTitle = popupCreateCard.querySelector("input[name='name']");
const formCreateCardFieldLink = popupCreateCard.querySelector("input[name='hobby']");

// third popup
const popupScalingPicture = document.querySelector("#popup3");
const bigPicture = document.querySelector(".popup__picture");
const bigPictureDescription = document.querySelector(".popup__discription");
const buttonClosePopupScalingPicture = document.querySelector(".third-popup__button-close");

//карточки
const elementsList = document.querySelector(".elements");
const elementTemplate = document.querySelector("#element-template").content;

document.querySelectorAll(".popup").forEach((elPopup) => {
  elPopup.querySelector(".popup__button-close").addEventListener("click", () => closePopup(elPopup));
});

function openPopup(popup) {
  popup.classList.add("popup_opened");
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

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


function isProtocolLink(url) {
  return url.includes("http://") || url.includes("https://");
}

//создание карточки
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

//функция на добавления лайка
const cardlikeButtonActive = (e) => e.target.closest(".element__like").classList.toggle("element__like_active");

//функция на удаление карточки
const deleteButtonActive = (e) => e.target.closest(".element").remove();

// Создание карточек
initialCards.forEach((element) => renderCard(createCard(element)));

//1
buttonEdit.addEventListener("click", preparationEditPopup);
addButton.addEventListener("click", openPopupCreateCard);
formEditProfile.addEventListener("submit", formEditProfileHandler);

//2
formCreateCard.addEventListener("submit", formCreateCardHandler);

//3

// renders functions
function renderCard(elementCard) {
  elementsList.prepend(elementCard);
}
