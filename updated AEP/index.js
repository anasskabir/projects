// template_a8h703n
// service_srhj4qs
// F1Ka5AioI-IycdjhX
let isModalOpen = false
let contrastToggle = false
const scaleFactor = 1/20

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape")
    const x = event.clientX * scaleFactor
    const y = event.clientY * scaleFactor

    for (let i=0; i < shapes.length; ++i) {
        const isOdd = i % 2 !== 0
        const boolInt = isOdd ? -1 : 1
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px) rotate(${x*10}deg)`
    }
}

function toggleContrast(){
    contrastToggle = !contrastToggle
    if (contrastToggle) {
        document.body.classList += " dark-theme"
    }
    else {
        document.body.classList.remove("dark-theme")
    }
}

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible"
    emailjs
    .sendForm(
        'service_srhj4qs',
        'template_a8h703n',
        event.target,
        'F1Ka5AioI-IycdjhX'
    ).then(() => {
        loading.classList.remove("modal__overlay--visible")
        success.classList += " modal__overlay--visible"
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible")
        alert(
            "The email service is temporarily unavailable. Please contact me directly at anasskabir@gmail.com"
        )
    })
    // setTimeout(() => {
    //     loading.classList.remove("modal__overlay--visible")
    //     success.classList += " modal__overlay--visible"
    //     console.log('it worked 1')
    // }, 1000);
}


function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = !isModalOpen
    // toggle modal
    document.body.classList += " modal--open"
}