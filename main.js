const scriptURL = 'https://script.google.com/macros/s/AKfycbz8Zx1W5LAzBxmhvpnqMO6SruPcuW2NAAlLcxjMB28KuUTAte5l_93r6Jb8gj2qsHy-/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => alert("Thanks for Contacting me..! Your message has been received..."))
        .catch(error => console.error('Error!', error.message))
})e"
