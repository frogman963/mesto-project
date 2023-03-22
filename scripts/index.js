//first popup
const editButton = document.querySelector(".profile__edit-button");
const popup1 = document.querySelector(".popup");
const closeButtonPopup1 = popup1.querySelector(".popup__button-close");
const editProfileForm = popup1.querySelector(".form");
const editProfileFormFieldLogin = popup1.querySelector("input[name='name']");
const editProfileFormFieldDescription = popup1.querySelector("input[name='hobby']");
// const editProfileFormBtnHandler = popup1.querySelector(".form__button-safe");

// Куда вставляем данные
const profileName = document.querySelector(".profile__name");
const profileDiscription = document.querySelector(".profile__discription");

// second popup
const addButton = document.querySelector(".profile__add-button");
const popup2 = document.querySelector(".second-popup");
const closeButtonPopup2 = popup2.querySelector(".second-popup__button-close");
const saveButtonPopup2 = popup2.querySelector("form__button-create");
const createCardForm = popup2.querySelector(".form");
const createCardFormFieldTitle = popup2.querySelector("input[name='name']");
const createCardFormFieldLink = popup2.querySelector("input[name='hobby']");


// third popup
const popup3 = document.querySelector(".third-popup");
const thirdPopupPicture = document.querySelector(".third-popup__picture");
const thirdPopupText = document.querySelector(".third-popup__text");
const thirdPopupButtonClose = document.querySelector(".third-popup__button-close");

//карточки
const elementsList = document.querySelector(".elements");
const elementTemplate = document.querySelector("#element-template").content;

// открытие первого popup1
const openPopup = function () {
  popup1.classList.add("popup_opened");
};

const closePopup = function () {
  popup1.classList.remove("popup_opened");
};

function whiteDataEditProfileForm() {
  editProfileFormFieldLogin.value = profileName.textContent;
  editProfileFormFieldDescription.value = profileDiscription.textContent;
}

function preparationEditPopup() {
  whiteDataEditProfileForm();
  openPopup();
}

function editProfileFormHandler(e) {
  e.preventDefault();

  profileName.textContent = editProfileFormFieldLogin.value;
  profileDiscription.textContent = editProfileFormFieldDescription.value;

  closePopup();
}

// открытие второго popup
const openSecondPopup = function () {
  popup2.classList.add("second-popup_opened");
};

const closeSecondPopup = function () {
  popup2.classList.remove("second-popup_opened");
};

// открытие второго popup
const openPopup2 = function () {
  popup2.classList.add("second-popup_opened");
};

const closePopup2 = function () {
  popup2.classList.remove("second-popup_opened");
};

function createCardFormHandler(e) {
  e.preventDefault();

  renderCard(createCard({ name: createCardFormFieldTitle.value, link: createCardFormFieldLink.value }));
  closePopup2();
}

//создание карточки
function createCard(card) {
  const elementCard = elementTemplate.cloneNode(true);
  const cardText = elementCard.querySelector(".element__text");
  const cardImage = elementCard.querySelector(".element__picture");
  const cardlikeButton = elementCard.querySelector(".element__like");
  const carddeleteButton = elementCard.querySelector(".element__delete");

  cardImage.alt = card.name;
  cardImage.src = card.link;
  cardText.textContent = card.name;

  cardlikeButton.addEventListener("click", cardlikeButtonActive);
  carddeleteButton.addEventListener("click", deleteButtonActive);
  cardImage.addEventListener('click', callThirdPopup)

  return elementCard;
}

function callThirdPopup(e) {
  thirdPopupPicture.src = e.target.closest('.element__picture').src;
  thirdPopupPicture.alt = e.target.closest('.element').textContent;
  thirdPopupText.textContent = e.target.closest('.element').textContent;
  openThirdPopup()
}
//открытие третьего popup
function openThirdPopup() {

  popup3.classList.add('third-popup_opened')
}

//закрытие третьего popup
function closeThirdPopup() {
  popup3.classList.remove('third-popup_opened')
}

//функция на добавления лайка
const cardlikeButtonActive = (e) => e.target.closest(".element__like").classList.toggle("element__like_active");

//функция на удаление карточки
const deleteButtonActive = (e) => e.target.closest(".element").remove();

// Создание карточек
initialCards.forEach((element) => renderCard(createCard(element)));


//1
editButton.addEventListener("click", preparationEditPopup);
closeButtonPopup1.addEventListener("click", closePopup);
addButton.addEventListener("click", openSecondPopup);
closeButtonPopup2.addEventListener("click", closeSecondPopup);
editProfileForm.addEventListener("submit", editProfileFormHandler);

//2
createCardForm.addEventListener("submit", createCardFormHandler);

//3
thirdPopupButtonClose.addEventListener('click', closeThirdPopup)

// renders functions
function renderCard(elementCard) {
  elementsList.prepend(elementCard);
}
