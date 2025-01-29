const mockupUri = document.querySelector('.mockup-uri');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

leftArrow.addEventListener('click', (e) => {
    e.preventDefault()
    const items = document.querySelectorAll('.shop-casette')
    document.querySelector('.mockup-uri').appendChild(items[0])  
})

rightArrow.addEventListener('click', (e) => {
    e.preventDefault()
    const items = document.querySelectorAll('.shop-casette')
    document.querySelector('.mockup-uri').prepend(items[items.length - 1])

})
