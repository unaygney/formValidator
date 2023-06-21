const form = document.getElementById('form');
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')


// form error
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error'
  const small = formControl.querySelector('small')
  small.innerText = message;
}
// form success
function showSucces(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success'
}

// getfield name
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}
// check required
function checkRequired(inputArr) {
  inputArr.forEach(input => {

    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`)
    } else {
      showSucces(input);
    }

  });
}

// Check e mail

function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value)) {
    showSucces(input)
  } else {
    showError(input, `${getFieldName(input)} is not valid`)
  }
}

function checkPassword(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, 'Passwords do not match')

  }
}

function checkLength ( input , min , max ) {

  if (input.value.length < 3 ){
    showError(input  , `${getFieldName(input)} must be at least minimum 3 characters.`)
  } else if (input.value.length > 15){
    showError(input  , `${getFieldName(input)} must be  less than 15 characters.`)
  } else{
    showSucces(input)
  }

}

















// form add event listener 

form.addEventListener('submit', function (e) {
  e.preventDefault()

  checkRequired([username, email, password, password2]);
  checkEmail(email)
  checkPassword(password, password2)
  checkLength(username , 3 , 15)
  checkLength(password , 8 , 25)
})