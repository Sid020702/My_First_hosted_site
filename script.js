const button = document.getElementById('myButton')

button.addEventListener('click', ({ target }) => {
    target.classList.toggle('red')
})