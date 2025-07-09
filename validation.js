const form = document.getElementById('form')
const first_name = document.getElementById('first-name')
const password = document.getElementById('password')
const email = document.getElementById('email')
const repeat_password = document.getElementById('repeat-password')
const error_message = document.getElementById('error-message')

form.addEventListener('submit', (e) => {
    let errors = []
    if(first_name) {
        errors = getSignupFormErrors(first_name, email, password, repeat_password)
    } else {
        errors = getSignupFormErrors(first_name, email, password)
    }

    if (errors.length > 0 &&  !errors.includes('Password is incorrect')) {
        e.preventDefault()
        error_message.innerText = errors.join(". ")
    }
})

function getSignupFormErrors(first_name, email, password, repeat_password) {
    let errors = []

    if(first_name.value === '' || first_name.value == null) {
        errors.push('Firstname is required')
        first_name.parentElement.classList.add('incorrect')
    }

    if(email.value === '' || email.value == null) {
        errors.push('email is required')
        email.parentElement.classList.add('incorrect')
    }

    if(password.value === '' || password.value == null) {
        errors.push('Password is required')
        password.parentElement.classList.add('incorrect')
    }

    if(repeat_password.value === '' || repeat_password.value == null) {
        errors.push('Repeat password is required')
        repeat_password.parentElement.classList.add('incorrect')
    }

    if(password.value !== repeat_password.value) {
        errors.push('Password is incorrect')
        password.parentElement.classList.add('incorrect')
        repeat_password.parentElement.classList.add('incorrect')
    }

    return errors;
}

inputs = [first_name, email, password, repeat_password]
inputs.forEach(input => {
    console.log('1')
    if(input.parentElement.classList.contains('incorrect')) {
        input.parentElement.classList.remove('incorrect')
    }
    error_message.innerText = ''
});