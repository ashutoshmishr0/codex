const scriptURL = 'https://script.google.com/macros/s/AKfycbxCrges3eTvU9H8UTzIIX1B7aVfkt1cPF2sOapbdsBCQt3iDvkFg_1vqqAgEkxeiddWhQ/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => alert("Thanks for Contacting me..! Your message has been received..."))
        .catch(error => console.error('Error!', error.message))
})e"
