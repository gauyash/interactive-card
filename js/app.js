let form = document.querySelector(".form");
let username = document.querySelector("#username");
let number = document.querySelector("#number");
let month = document.querySelector("#month");
let year = document.querySelector("#year");
let cvv = document.querySelector("#cvv");
let errorEl = document.querySelectorAll(".error");
let cardMonth = document.querySelector(".cardMonth");
let cardYear = document.querySelector(".cardYear");
let cardNum = document.querySelector(".cardNum");
let cvvNum = document.querySelector(".cvvNum");
let nameEl = document.querySelector(".name");


number.addEventListener("input",(e)=>{
    let value=e.target.value;
    value = value.replace(/\s/g, "");
    let newValue="";
    for (let i = 0; i < value.length; i++) {
        if(i>0 && i % 4 == 0){
            newValue +=" ";
        }
        newValue+=value[i];
    }
    e.target.value=newValue;
})


form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateError();
});

function setError(element, message) {
  element.textContent = message;
}

function clearError(element) {
  element.textContent = "";
}

function validateError() {
  let isValid = true;
  let patternCard = /^(\d\s?)+$/;
  let pattern = /^\d+$/;
  let userNumber = number.value;
  let userCvv = cvv.value;

  let str = userNumber;
  let result = str.replace(/\s/g, "");

  if (username.value == "") {
    setError(errorEl[0], "Can't be blank");
    isValid = false;
  } else {
    nameEl.textContent = username.value;
    clearError(errorEl[0]);
  }

  if (number.value == "") {
    setError(errorEl[1], "Can't be blank");
    isValid = false;
  } else if (!patternCard.test(userNumber)) {
    setError(errorEl[1], "Wrong Format, numbers only");
    isValid = false;
  } else if (result.length != 16) {
    setError(errorEl[1], "Length upto 16");
    isValid = false;
  } else {
    cardNum.textContent = number.value;
    clearError(errorEl[1]);
  }

  if (month.value == "") {
    setError(errorEl[2], "Can't be blank");
    isValid = false;
  } else {
    cardMonth.textContent = month.value;
    clearError(errorEl[2]);
  }

  if (year.value == "") {
    setError(errorEl[2], "Can't be blank");
    isValid = false;
  } else {
    cardYear.textContent = year.value;
    clearError(errorEl[2]);
  }

  if (cvv.value == "") {
    setError(errorEl[3], "Can't be blank");
    isValid = false;
  } else if (!pattern.test(userCvv)) {
    setError(errorEl[3], "Wrong Format, numbers only");
    isValid = false;
  } else if (userCvv.length != 3) {
    setError(errorEl[3], "Length upto 3");
    isValid = false;
  } else {
    cvvNum.textContent = cvv.value;
    clearError(errorEl[3]);
  }

  if(isValid){
    form.submit();
  }
}
