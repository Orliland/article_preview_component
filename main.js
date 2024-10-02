const shareButton = document.querySelector(".share");
const popup = document.querySelector(".popup");

let popupStatus = false;

shareButton.addEventListener("click", (event) => {
  shareButton.classList.toggle("share--active");
  popup.style.visibility = popupStatus === false ? "visible" : "hidden";
  popupStatus = !popupStatus;
});
