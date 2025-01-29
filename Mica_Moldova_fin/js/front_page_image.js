const slide = document.querySelector('.slide')
let left_sum = 0
let right_sum = 0

const onDrag = ({movementX}) => {
    // console.log(movementX)
    if (movementX < 0) {
        left_sum += Math.abs(movementX)
        right_sum = 0
    } else if (movementX > 0){
        right_sum += 1
        left_sum = 0
    }

    // console.log(left_sum)
    // console.log(right_sum)

    if(left_sum >= 160) {
        left_sum = 0
        const items = document.querySelectorAll('.item')
        document.querySelector('.slide').appendChild(items[0])  
        slide.style.cursor = 'grab'
        slide.removeEventListener('mousemove', onDrag)
        clearInterval(myTimer);
        myTimer = window.setInterval(timerResult, 5000)
    } 

    // back animation (previous image)

    // else if (right_sum === 160){
    //     right_sum = 0
    //     const items = document.querySelectorAll('.item')
    //     document.querySelector('.slide').prepend(items[items.length - 1])
    //     console.log(items[items.length - 1])
    // }
}

slide.addEventListener('mousedown', (e) => {
    e.preventDefault()
    slide.style.cursor = 'grabbing'
    slide.addEventListener('mousemove', onDrag)
})

slide.addEventListener('mouseup', (e) => {
    e.preventDefault()
    left_sum = 0
    right_sum = 0
    slide.style.cursor = 'grab'
    slide.removeEventListener('mousemove', onDrag)
})

const timerResult = () => {
    const items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])  
    slide.style.cursor = 'grab'
    slide.removeEventListener('mousemove', onDrag)
}

let myTimer = window.setInterval(timerResult, 5000)