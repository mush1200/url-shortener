const form = document.querySelector('#form')
const submitButton = document.querySelector('#submit-btn')

form.addEventListener('submit', function onFormSubmitted(event) {
  if (!form.checkValidity()) {
    event.stopPropagation()
    event.preventDefault()
    alert('請輸入正確網址')  //驗證不通過，就跳 alert
  }
})


submitButton.addEventListener('click', function onSubmitButtonClicked(event) {
  form.classList.add('was-validated')
})