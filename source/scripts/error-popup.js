export function popup() {
	var modalPopupError = document.querySelector(".error-popup");
var modalButton = document.querySelector(".main-form__button");
var modalPopupOk = document.querySelector(".application-sent-popup");
var modalButtonError = document.querySelector(".error-popup__button");
var modalButtonOk = document.querySelector(".application-sent-popup__button");
var modalFormSurname = document.querySelector(".main-form__text--surname");
var modalFormName = document.querySelector(".main-form__text--name");
var modalFormEmail = document.querySelector(".main-form__text--email");
var modalWrapper = document.querySelector(".modal-wrapper");

if (modalButton) {
	modalButton.addEventListener("click", function(evt) {
	evt.preventDefault();
	if (modalFormSurname.value === null || modalFormSurname.value === "", modalFormName.value === null || modalFormName.value === "", modalFormEmail.value === null || modalFormEmail.value === "") {
 // Проверяем заполненность формы
 modalPopupError.classList.add("js-open"); 
 modalWrapper.classList.add("js-open"); 
}
else (modalPopupOk.classList.add("js-open"), modalWrapper.classList.add("js-open"));
});

modalButtonError.addEventListener("click",function(evt) {
	evt.preventDefault();
	modalPopupError.classList.remove("js-open");
	modalWrapper.classList.remove("js-open"); 
});
modalButtonOk.addEventListener("click",function(evt) {
	evt.preventDefault();
	modalPopupOk.classList.remove("js-open");
	modalWrapper.classList.remove("js-open"); 
});
window.addEventListener("keydown", function(evt) {
   if(evt.keyCode === 27) {
   	evt.preventDefault();
   	modalPopupError.classList.remove("js-open");
   	modalPopupOk.classList.remove("js-open");
   	modalWrapper.classList.remove("js-open"); 
   }
});
} 


}


