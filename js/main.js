// RANDOM COLOR GENERATOR

const buttonsColor = document.querySelectorAll('.btn-color')
const javaScript = document.querySelector('#js-color')

const generateRandomColor = () => {
    const hexCodes = '0123456789ABCDEF'
    let color = ''
    for (let i = 0; i < 6; i++) {
        color += hexCodes[Math.floor(Math.random() * hexCodes.length)]
    }
    return '#' + color
}

const setRandomColors = () => {
    buttonsColor.forEach((buttonColor) => {
        buttonColor.innerHTML = generateRandomColor()
        buttonColor.onclick = (event) => {
            javaScript.style.color = event.target.innerHTML
        }
    })
}

window.onload = () => setRandomColors()
window.onkeydown = (event) => {
    if (event.code.toLowerCase() === 'space') {
        event.preventDefault()
        setRandomColors()
    }
}

// SLIDER BLOCK

const slides = document.querySelectorAll('.slide')
const next = document.querySelector('#next')
const prev = document.querySelector('#prev')
let index = 0

const hideSlide = () => {
    slides.forEach((slide) => {
        slide.style.opacity = 0
        slide.classList.remove('active_slide')
    })
}
const showSlide = (i = 0) => {
    slides[i].style.opacity = 1
    slides[i].classList.add('active_slide')
}

hideSlide()
showSlide(index)


const autoSlider = (i = 0) => {
    setInterval(() => {
        i++
        if (i > slides.length - 1) {
            i = 0
        }
        hideSlide()
        showSlide(i)
    }, 10000)
}

next.onclick = () => {
    index < slides.length - 1 ? index++ : index = 0
    hideSlide()
    showSlide(index)
}

prev.onclick = () => {
    index > 0 ? index-- : index = slides.length - 1
    hideSlide()
    showSlide(index)
}

autoSlider(index)

//Promise
console.log('Loading...');
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const product = {
            name: "Milk",
            price: "3$"
        };
        console.log(product, '1 step');
        resolve(product)
        reject()
    }, 3000);
    // throw new Error()
});



// const resolveData = (product) => {
//     setTimeout(() => {
//         product.price = '4$'
//         console.log(product, '2 step');
//     }, 1500);
// };

// const rejectData = () => {
//     console.log('Promise is not resolved!');
// }

promise.then(() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.price = '4$'
            console.log(product, '2 step');
            resolve(product)
            reject()
        }, 1500);
    })
}, () => {
    setTimeout(() => {
        console.log('First promise is not resolved!');
    }, 500)
}).then((product) => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            product.price = '4.2$'
            console.log(product, '3 step');
            resolve(product)
            reject()
        }, 2000)
    })
}, () => {
    setTimeout(() => {
        console.log('Second promise is not resolved!');
    }, 500)
}).then((product) => {
    setTimeout(() => {
        product.soldOut = true
        console.log(product, '4 step');
    }, 2500)
}, () => {
    console.log('Third promise is not resolved!');
})
