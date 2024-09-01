// Start here
/* Mobile menu function */
function burgerClick() {
  let nav = document.getElementsByClassName('nav')[0];
  let currentProp = nav.style.top;
  console.log(currentProp);
  if (currentProp == '0px') {
    nav.style.top = '-100%';
  } else {
    nav.style.top = '0';
  }
}

let burgerMenu = document.getElementsByClassName('menu-toggle')[0];
burgerMenu.addEventListener('click', burgerClick);

/* Form validation */
var formDiv = document.getElementsByClassName('form')[0];

var submitbtn = document.getElementsByClassName('btn-submit')[0];
submitbtn.disabled = true;
submitbtn.classList.add('disabled');
var userData = new Map();

function submitFunc() {
  var form = new FormData(document.getElementsByClassName('form')[0]);
  userData.set('First Name', form.get('name'));
  userData.set('Last Name', form.get('surname'));
  userData.set('Email', form.get('email'));
  userData.set('City', document.querySelector('.form-select .form-control').value);
  userData.set('Phone', form.get('phone'));
  userData.set('Date', form.get('date'));
  userData.set('Comment', form.get('comment'));
  let checkbox = document.querySelector('.form-checkbox-control:checked');

  if (
    userData.get('First Name') &&
    userData.get('Last Name') &&
    userData.get('Email') &&
    userData.get('City') &&
    userData.get('Phone') &&
    userData.get('Date') &&
    userData.get('Comment') &&
    checkbox
  ) {
    submitbtn.disabled = false;
    submitbtn.classList.remove('disabled');
  }
}

let checkBox = document.querySelector('.form-checkbox-control');
let closeBtn = document.querySelector('.btn-close');

checkBox.addEventListener('click', displayModal);
formDiv.addEventListener('keyup', submitFunc);
formDiv.addEventListener('click', submitFunc);

submitbtn.addEventListener('click', formSub);
closeBtn.addEventListener('click', hideModal);

function displayModal() {
  document.getElementsByClassName('overlay')[0].style.opacity = '1';
  document.getElementsByClassName('overlay')[0].style.visibility = 'visible';
  document.getElementsByClassName('modal-content')[0].style.opacity = '1';
}

function hideModal() {
  document.getElementsByClassName('overlay')[0].style.opacity = '0';
  document.getElementsByClassName('overlay')[0].style.visibility = 'hidden';
  document.getElementsByClassName('modal-content')[0].style.opacity = '0';
}

function formSub() {
  displayModal();
  confirmBtn.style.display = 'block';
  dataReflect();
}

/* policy Pop-up */
var modalUl = document.querySelector('.modal-body .modal-list');

let policyTextNode = document.createElement('li');
let policyText = document.createTextNode('You agree to our friendly privacy policy.');
policyTextNode.appendChild(policyText);
modalUl.appendChild(policyTextNode);

/* Reflecting data for confirmation */
function dataReflect() {
  modalUl.removeChild(modalUl.firstElementChild);

  userData.forEach((val, key) => {
    modalUl.appendChild(document.createElement('li'));
    let lastChild = modalUl.querySelector('li:last-child');
    lastChild.innerHTML = key + ': <strong>' + val + '</strong>';
    lastChild.classList.add('modal-list-item');
  });
}

let confirmBtn = document.querySelector('.modal-footer .btn-confirm');
confirmBtn.style.display = 'none';
confirmBtn.addEventListener('click', hideModal);
// Start here
