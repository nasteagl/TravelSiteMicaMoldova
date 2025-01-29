const sectionOne = document.querySelector('#part_one')
const sections = document.querySelectorAll('section')

const options = {
    root: null, // it is viewport
    threshold: 0, // 1- it triggers if 100% of the item need to be in the margin boundaries, 0 - as soon as it enters it triggers, other values is procentage of how many procent is visible in viewport
    rootMargin: "-150px" // margin for viewport
}

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) { // to get entry that is true 9only thing that we need
            return;
        }
        console.log(entry.target)
        entry.target.classList.toggle('invers')
        observer.unobserve(entry.target) // definitely changes even if we come back (image loading for example), for lazy loading of images
    })
}, options)

sections.forEach(section => {
    observer.observe(section)
})
