const nav_bar = document.querySelector('#main_menu_nav_bar')
const sectionOne = document.querySelector('#part_one')
const sectionTwo = document.querySelector('#part_two')
const sectionThree = document.querySelector('#part_three')
const sectionFour = document.querySelector('#part_four')
const sectionFive = document.querySelector('#part_five')
const sectionSix = document.querySelector('#part_six')
const sections = document.querySelectorAll('section')
const page_text = document.querySelector('#nav_bar_page')
const nav_bar_line = document.querySelector('#main_menu_nav_line')

const sectionOptions = {
    threshold: 0.5,
    rootMargin: "0px 0px -100px 0px"
}

const sectionOneObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(!entry.isIntersecting) {
            nav_bar.children[0].classList.remove('active')
            window.setTimeout(nav_bar.children[0].innerHTML = ``, 3000)
            // nav_bar.children[0].innerHTML = ``
        } else if(entry.isIntersecting) {
            page_text.textContent = '01/06'
            nav_bar.children[0].classList.add('active')
            nav_bar.children[0].innerHTML = 
                    `                    
                    <svg width="1.5rem" height="1.5rem" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.00562 5.69438L0 10.7L5.00562 15.7056L10.0112 10.7L5.00562 5.69438Z" fill="#FDFDFD"/>
                        <path d="M15.7056 5.00562L10.7 0L5.6944 5.00562L10.7 10.0112L15.7056 5.00562Z" fill="#FDFDFD"/>
                        <path d="M5.6944 16.3944L10.7 21.4L15.7056 16.3944L10.7 11.3888L5.6944 16.3944Z" fill="#FDFDFD"/>
                        <path d="M16.3944 5.69438L11.3887 10.7L16.3944 15.7056L21.4 10.7L16.3944 5.69438Z" fill="#FDFDFD"/>
                    </svg>
                    `

            nav_bar.children[0].style.scale = '1'
            nav_bar.children[1].style.scale = '1.4'
            nav_bar.children[2].style.scale = '1.2'
            nav_bar.children[3].style.scale = '1'
            nav_bar.children[4].style.scale = '0.8'
            nav_bar.children[5].style.scale = '0.6'

        }
    })
}, sectionOptions)

const sectionTwoObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(!entry.isIntersecting) {
            nav_bar.children[1].classList.remove('active')
            window.setTimeout(nav_bar.children[1].innerHTML = ``, 3000)
            // nav_bar.children[1].innerHTML = ``
        } else if(entry.isIntersecting) {
            page_text.textContent = '02/06'
            nav_bar.children[1].classList.add('active')
            nav_bar.children[1].innerHTML = 
                    `                    
                    <svg width="1.5rem" height="1.5rem" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.00562 5.69438L0 10.7L5.00562 15.7056L10.0112 10.7L5.00562 5.69438Z" fill="#FDFDFD"/>
                        <path d="M15.7056 5.00562L10.7 0L5.6944 5.00562L10.7 10.0112L15.7056 5.00562Z" fill="#FDFDFD"/>
                        <path d="M5.6944 16.3944L10.7 21.4L15.7056 16.3944L10.7 11.3888L5.6944 16.3944Z" fill="#FDFDFD"/>
                        <path d="M16.3944 5.69438L11.3887 10.7L16.3944 15.7056L21.4 10.7L16.3944 5.69438Z" fill="#FDFDFD"/>
                    </svg>
                    `

            nav_bar.children[0].style.scale = '1.4'
            nav_bar.children[1].style.scale = '1'
            nav_bar.children[2].style.scale = '1.4'
            nav_bar.children[3].style.scale = '1.2'
            nav_bar.children[4].style.scale = '1'
            nav_bar.children[5].style.scale = '0.8'           
        }
    })
}, sectionOptions)

const sectionThreeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(!entry.isIntersecting) {
            nav_bar.children[2].classList.remove('active')
            nav_bar.children[2].innerHTML = ``
        } else if(entry.isIntersecting) {
            page_text.textContent = '03/06'
            nav_bar.children[2].classList.add('active')
            nav_bar.children[2].innerHTML = 
                    `                    
                    <svg width="1.5rem" height="1.5rem" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.00562 5.69438L0 10.7L5.00562 15.7056L10.0112 10.7L5.00562 5.69438Z" fill="#FDFDFD"/>
                        <path d="M15.7056 5.00562L10.7 0L5.6944 5.00562L10.7 10.0112L15.7056 5.00562Z" fill="#FDFDFD"/>
                        <path d="M5.6944 16.3944L10.7 21.4L15.7056 16.3944L10.7 11.3888L5.6944 16.3944Z" fill="#FDFDFD"/>
                        <path d="M16.3944 5.69438L11.3887 10.7L16.3944 15.7056L21.4 10.7L16.3944 5.69438Z" fill="#FDFDFD"/>
                    </svg>
                    `

            nav_bar.children[0].style.scale = '1.2'
            nav_bar.children[1].style.scale = '1.4'
            nav_bar.children[2].style.scale = '1'
            nav_bar.children[3].style.scale = '1.4'
            nav_bar.children[4].style.scale = '1.2'
            nav_bar.children[5].style.scale = '1'       
        }
    })
}, sectionOptions)

const sectionFourObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(!entry.isIntersecting) {
            nav_bar.children[3].classList.remove('active')
            nav_bar.children[3].innerHTML = ``
        } else if(entry.isIntersecting) {
            page_text.textContent = '04/06'
            nav_bar.children[3].classList.add('active')
            nav_bar.children[3].innerHTML = 
                    `                    
                    <svg width="1.5rem" height="1.5rem" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.00562 5.69438L0 10.7L5.00562 15.7056L10.0112 10.7L5.00562 5.69438Z" fill="#FDFDFD"/>
                        <path d="M15.7056 5.00562L10.7 0L5.6944 5.00562L10.7 10.0112L15.7056 5.00562Z" fill="#FDFDFD"/>
                        <path d="M5.6944 16.3944L10.7 21.4L15.7056 16.3944L10.7 11.3888L5.6944 16.3944Z" fill="#FDFDFD"/>
                        <path d="M16.3944 5.69438L11.3887 10.7L16.3944 15.7056L21.4 10.7L16.3944 5.69438Z" fill="#FDFDFD"/>
                    </svg>
                    `

            nav_bar.children[0].style.scale = '1'
            nav_bar.children[1].style.scale = '1.2'
            nav_bar.children[2].style.scale = '1.4'
            nav_bar.children[3].style.scale = '1'
            nav_bar.children[4].style.scale = '1.4'
            nav_bar.children[5].style.scale = '1.2'    
        }
    })
}, sectionOptions)

const sectionFiveObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(!entry.isIntersecting) {
            nav_bar.children[4].classList.remove('active')
            nav_bar.children[4].innerHTML = ``
        } else if(entry.isIntersecting) {
            page_text.textContent = '05/06'
            nav_bar.children[4].classList.add('active')
            nav_bar.children[4].innerHTML = 
                    `                    
                    <svg width="1.5rem" height="1.5rem" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.00562 5.69438L0 10.7L5.00562 15.7056L10.0112 10.7L5.00562 5.69438Z" fill="#FDFDFD"/>
                        <path d="M15.7056 5.00562L10.7 0L5.6944 5.00562L10.7 10.0112L15.7056 5.00562Z" fill="#FDFDFD"/>
                        <path d="M5.6944 16.3944L10.7 21.4L15.7056 16.3944L10.7 11.3888L5.6944 16.3944Z" fill="#FDFDFD"/>
                        <path d="M16.3944 5.69438L11.3887 10.7L16.3944 15.7056L21.4 10.7L16.3944 5.69438Z" fill="#FDFDFD"/>
                    </svg>
                    `

            nav_bar.children[0].style.scale = '0.8'
            nav_bar.children[1].style.scale = '1'
            nav_bar.children[2].style.scale = '1.2'
            nav_bar.children[3].style.scale = '1.4'
            nav_bar.children[4].style.scale = '1'
            nav_bar.children[5].style.scale = '1.4'  
        }
    })
}, sectionOptions)

const sectionSixObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(!entry.isIntersecting) {
            nav_bar.children[5].classList.remove('active')
            nav_bar.children[5].innerHTML = ``
        } else if(entry.isIntersecting) {
            page_text.textContent = '06/06'
            nav_bar.children[5].classList.add('active')
            nav_bar.children[5].innerHTML = 
                    `                    
                    <svg width="1.5rem" height="1.5rem" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.00562 5.69438L0 10.7L5.00562 15.7056L10.0112 10.7L5.00562 5.69438Z" fill="#FDFDFD"/>
                        <path d="M15.7056 5.00562L10.7 0L5.6944 5.00562L10.7 10.0112L15.7056 5.00562Z" fill="#FDFDFD"/>
                        <path d="M5.6944 16.3944L10.7 21.4L15.7056 16.3944L10.7 11.3888L5.6944 16.3944Z" fill="#FDFDFD"/>
                        <path d="M16.3944 5.69438L11.3887 10.7L16.3944 15.7056L21.4 10.7L16.3944 5.69438Z" fill="#FDFDFD"/>
                    </svg>
                    `

            nav_bar.children[0].style.scale = '0.6'
            nav_bar.children[1].style.scale = '0.8'
            nav_bar.children[2].style.scale = '1'
            nav_bar.children[3].style.scale = '1.2'
            nav_bar.children[4].style.scale = '1.4'
            nav_bar.children[5].style.scale = '1'  
        }
    })
}, sectionOptions)

sectionOneObserver.observe(sectionOne)
sectionTwoObserver.observe(sectionTwo)
sectionThreeObserver.observe(sectionThree)
sectionFourObserver.observe(sectionFour)
sectionFiveObserver.observe(sectionFive)
sectionSixObserver.observe(sectionSix)
