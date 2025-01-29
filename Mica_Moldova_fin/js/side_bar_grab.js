const nav_bar_slide = document.querySelector('#main_menu_nav_line')

const track = document.getElementById('nav_track')

window.onbeforeunload = e => {
    track.style.transform  = `translate(0, 0)`
    window.scrollTo(0, 0);
}

window.onload = e => {
    track.style.transform  = `translate(0, 0)`
    window.scrollTo(0, 0);
}

let nav_pressed = false

window.onmousedown = e => {
    if(nav_pressed) {
        document.body.style.cursor = "grabbing";
    }
    e.preventDefault()
    track.dataset.mouseDownAt = e.clientY;
}

window.onmouseup = e => {
    track.dataset.mouseDownAt = "0";
    if(nav_pressed) {
        track.dataset.prevPercentage = track.dataset.percentage;
    }
}

window.onmousemove = e => {
    if(track.dataset.mouseDownAt === '0') return;

    if(nav_pressed === true) {
        const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientY,
        maxDelta = window.innerHeight; // how fast we move throw screen
    
        const percentage = (mouseDelta/maxDelta) * 100;
        let nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;
    
        nextPercentage = Math.min(nextPercentage, 0)
        nextPercentage = Math.max(nextPercentage, -84)
        
        track.dataset.percentage = nextPercentage
    
        track.style.transform  = `translate(0, ${nextPercentage}%)`
    }
}

nav_bar_slide.addEventListener('mousedown', (e) => {
    nav_pressed = true
})

window.addEventListener('mouseup', (e) => {
    document.body.style.cursor = "";
    nav_pressed = false
})

// window.onmousemove = e => {
//     if(track.dataset.mouseDownAt === '0') return;

//     const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientY,
//     maxDelta = window.innerHeight / 2;

//     const percentage = (mouseDelta/maxDelta) * -100;
//     let nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;

//     nextPercentage = Math.min(nextPercentage, 0)
//     nextPercentage = Math.max(nextPercentage, -84)
    
//     track.dataset.percentage = nextPercentage

//     track.style.transform  = `translate(0, ${nextPercentage}%)`
// }