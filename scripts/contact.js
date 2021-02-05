'use strict';

function validation() 
{
  let form = document.getElementById("form");
  let email = document.getElementById("email").value;
  let fullname = document.getElementById("fullname").value;
  let text = document.getElementById("text");
  let fullname_text = document.getElementById("fullname-text");
  let pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let string_pattern = /^[A-Za-z ]*[A-Za-z][A-Za-z ]*$/;
  var error = "no";

  if (email.match(pattern)) {
    form.classList.add("valid");
    form.classList.remove("invalid");
    text.innerHTML = "";
    text.style.color = "00ff00";
  } else {
    form.classList.remove("valid");
    form.classList.add("invalid");
    text.innerHTML = "Please enter a valid Email Adress";
    text.style.color = "#ff0000";
    var error = "yes";
  }
  

  if (fullname === "" || !fullname.match(string_pattern)) {
    fullname_text.innerHTML = "Please provide a valid name";
    var error = "yes";
  } else {
    fullname_text.innerHTML = "";
  }

  if (error === "no") {
    toggleText();
  } 

}

function toggleText() {
  var text = document.getElementById("message");
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}

































/* const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []
  if (name.value === '' || name.value == null) {
    messages.push('Name is required')
  }

  if (password.value.length <= 6) {
    messages.push('Password must be longer than 6 characters')
  }

  if (password.value.length >= 20) {
    messages.push('Password must be less than 20 characters')
  }

  if (password.value === 'password') {
    messages.push('Password cannot be password')
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
}) */