const names = document.getElementById('name');
const phone = document.getElementById('phn');
const pass=document.getElementById('pwd')

const err1 = document.getElementById('err1');
const err2 = document.getElementById('err2');
const err3 = document.getElementById('err3');

function validate() {
  const regexname = /^[a-zA-Z\s]+$/;
  const regexphn = /^\d+$/;
  const regexpwd= /^[a-zA-Z0-9]+$/
  let Valid = true;

  if (regexname.test(names.value)) {
    err1.innerText = "Name is valid";
    err1.style.color = 'Green';
  } else {
    err1.innerText = "Name is not valid";
    err1.style.color = 'red';
    Valid = false;
  }

  if (regexphn.test(phone.value)) {
    err2.innerText = "Phone number is valid";
    err2.style.color = 'Green';
  } else {
    err2.innerText = "Phone number is not valid";
    err2.style.color = 'red';
    Valid = false;
  }

  if (regexpwd.test(pass.value)) {
    err3.innerText = "password is valid";
    err3.style.color = 'Green';
  } else {
    err3.innerText = "password is not valid";
    err3.style.color = 'red';
    Valid = false;
  }

  return Valid;
}