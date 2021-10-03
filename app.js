"use strict";

const pinLogin = document.querySelector(".pin-login");
const password = document.querySelector(".pin-login__text");
const pinLoginNumpad = document.querySelector(".ping-login__numpad");
const pinLoginKey = document.querySelectorAll(".pin-login__key");
const clear = document.querySelector(".pin-long__clear");

console.log(pinLoginKey);

for (let i = 0; i < pinLoginKey.length; i++) {
  pinLoginKey[i].addEventListener("click", function (event) {
    password.value = password.value + event.currentTarget.value;
  });
}
