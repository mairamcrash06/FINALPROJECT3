const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneSpan = document.querySelector('#phone_result')

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.addEventListener('click', () => {
    if (regExp.test(phoneInput.value)) {
        phoneSpan.innerHTML = 'OK'
        phoneSpan.style.color = 'green'
    } else {
        phoneSpan.innerHTML = 'NOT OK'
        phoneSpan.style.color = 'red'
    }
})

//TAB SLIDER

const tabsContentCards = document.querySelectorAll('.tab_content_block')
const tabsItems = document.querySelectorAll('.tab_content_item')
const tabsItemsParent = document.querySelector('.tab_content_items')
let currentTab = 0

const hideTabsContentCards = () => {
    tabsContentCards.forEach(tabContent => {
        tabContent.style.display = 'none'
    })
    tabsItems.forEach( tabItem => {
        tabItem.classList.remove('tab_content_item_active')
    })
}

const showTabsContentCards = (indexElement = 0) => {
    tabsContentCards[indexElement].style.display = 'block'
    tabsItems[indexElement].classList.add('tab_content_item_active')
}

const switchTab = () => {
    hideTabsContentCards()
    currentTab = (currentTab + 1) % tabsItems.length
    showTabsContentCards(currentTab)
}

hideTabsContentCards()
showTabsContentCards()
setInterval(switchTab, 3000)

tabsItemsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabsItems.forEach((tabItem, tabItemIndex) => {
            if(event.target === tabItem) {
                hideTabsContentCards()
                currentTab = tabItemIndex
                showTabsContentCards(currentTab)
            }
        })
    }
}



//CONVERTER
const somInput = document.querySelector('#som')
const usdInput = document.querySelector('#usd')
const eurInput = document.querySelector('#eur')

const converter = (element, targetElement, targetElement2, type) => {
    element.addEventListener('input', () => {
        const request = new XMLHttpRequest()
        request.open('GET', '../data/converter.json')
        request.setRequestHeader('Content-type', 'application/json')
        request.send()
        request.onload = () => {
            const changes = JSON.parse(request.response)
            switch (type) {
                case 'som':
                    targetElement.value = (element.value / changes.usd).toFixed(2);
                    targetElement2.value = (element.value / changes.eur).toFixed(2);
                    break;
                case "usd":
                    targetElement.value = (element.value * changes.usd).toFixed(2);
                    targetElement2.value = (element.value * changes.eurUsd).toFixed(2);
                    break;
                case "eur":
                    targetElement.value = (element.value * changes.usdEur).toFixed(2);
                    targetElement2.value = (element.value * changes.eur).toFixed(2);
                    break;
                default:
                    console.log("Неправильный тип")
                    break;
            }
            element.value === "" && (targetElement.value = targetElement2.value = "")
        }
    })
}

converter(somInput, usdInput, eurInput, 'som')
converter(usdInput, somInput, eurInput, 'usd')
converter(eurInput, usdInput, somInput, 'eur')

//CARD SWITCHER
const card = document.querySelector('.card'),
    btnPrev = document.querySelector('#btn-prev'),
    btnNext = document.querySelector('#btn-next')

let count = 1

// const fetchData = () => {
//     fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
//         .then(response => response.json())
//         .then(data => {
//             card.innerHTML = `
//             <p>${data.title}<p>
//             <p style="color: ${data.completed ? 'green' : 'red'}">${data.completed}<p>
//             <span>${data.id}<span>
//             `
//         })
// }

const fetchData = async () => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
        const data = await response.json()
        card.innerHTML = `
                <p>${data.title}<p>
                <p style="color: ${data.completed ? 'green' : 'red'}">${data.completed}<p>
                <span>${data.id}<span>
                ` 
    } catch (e) {
        console.log(e);
    }
    


    // 2
    try {
        const response2 = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data2 = await response2.json()
        console.log(data2);
    } catch (e) {
        console.log(e);
    }
}

btnNext.onclick = () => {
    count++
    if (count > 200) {
        count = 1
    }
    fetchData()
}

btnPrev.onclick = () => {
    count--
    if (count < 1) {
        count = 200
    }
    fetchData()
}

fetchData()

