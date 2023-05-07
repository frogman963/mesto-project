import { closePopup } from "./utils";

const popupformEditProfile = document.querySelector("#popup1");
const buttonEdit = document.querySelector(".profile__edit-button");
const popupCreateCard = document.querySelector("#popup2");
const addButton = document.querySelector(".profile__add-button");
const popupScalingPicture = document.querySelector("#popup3");


document.querySelectorAll(".popup").forEach((elPopup) => {
    elPopup.querySelector(".popup__button-close").addEventListener("click", () => closePopup(elPopup));
  });




function addEscapeKeyHandler(popup) {
    function handleEscapeKey(event) {
        if (event.key === 'Escape') {
            closePopup(popup);
        }
    }

    document.addEventListener('keydown', handleEscapeKey);

    return function removeEscapeKeyHandler() {
        document.removeEventListener('keydown', handleEscapeKey);
    };
}

function addOverlayClickHandler(popup) {
    function handleOverlayClick(event) {
        if (event.target === popup) {
            closePopup(popup);
        }
    }

    popup.addEventListener('click', handleOverlayClick);

    return function removeOverlayClickHandler() {
        popup.removeEventListener('click', handleOverlayClick);
    };
}
export {
    popupformEditProfile,
    buttonEdit,
    popupCreateCard,
    addButton,
    popupScalingPicture,
    addEscapeKeyHandler,
    addOverlayClickHandler,

}
