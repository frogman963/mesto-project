import { elementsList } from "./card";

function openPopup(popup) {
    popup.classList.add("popup_opened");
    addEscapeKeyHandler(popup);
    addOverlayClickHandler(popup);
}


function closePopup(popup) {
    popup.classList.remove("popup_opened");
    const removeEscapeKeyHandler = addEscapeKeyHandler(popup);
    removeEscapeKeyHandler();
}
function isProtocolLink(url) {
    return url.includes("http://") || url.includes("https://");
  }

  function renderCard(elementCard) {
    elementsList.prepend(elementCard);
  }


export{openPopup , closePopup ,  isProtocolLink , renderCard}