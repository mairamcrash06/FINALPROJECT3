const gmailInput = document.querySelector("#gmail_input")
const checkBtn = document.querySelector("#gmail_button")
const gmailResult = document.querySelector("#gmail_result")

const emailRegExp = /^[\w.]+@[A-Za-z]+\.([A-Za-z]+)*$/;

checkBtn.onclick = () => {
    if (emailRegExp.test(gmailInput.value)) {
        gmailResult.innerText = "Valid"
        gmailResult.style.color = "green"
    } else {
        gmailResult.innerText = "Invalid"
        gmailResult.style.color = "red"
    }
}


const childBlock = document.querySelector('.child_block')

let positionX = 0
let positionY = 0

const moveChildBlock = () => {
    if (positionX < 448 && positionY === 0) {
        positionX++
        childBlock.style.left = `${positionX}px`
        setTimeout(moveChildBlock, 1)
    } else if (positionX >= 448 && positionY < 448) {
        positionY++
        childBlock.style.top = `${positionY}px`
        setTimeout(moveChildBlock, 1)
    } else if (positionX > 0 && positionY > 0) {
        positionX--
        childBlock.style.left = `${positionX}px`
        setTimeout(moveChildBlock, 1)
    } else if (positionX === 0 && positionY > 0) {
        positionY--
        childBlock.style.top = `${positionY}px`
        setTimeout(moveChildBlock, 1)
    }
}      
moveChildBlock()



//StopWatch

const minutes = document.querySelector("#minutesS")
const seconds = document.querySelector("#secondsS")
const mlSeconds = document.querySelector("#ml-secondsS")
const startBtn = document.querySelector("#start")
const stopBtn = document.querySelector("#stop")
const resetBtn = document.querySelector("#reset")
const intervals = document.querySelectorAll(".interval")
let mlSecondsCount = 0;
let secondsCount = 0;
let minutesCount = 0;


let stopWatchInterval;

const formatDigits = (unit, element) => {
    if (unit > 9) {
        element.innerText = unit
    } else if (unit === 0 || unit < 9) {
        element.innerText = "0" + unit
    }
}

startBtn.onclick = () => {
    clearInterval(stopWatchInterval)

    stopWatchInterval = setInterval(()=>{
        mlSecondsCount += 1
        formatDigits(mlSecondsCount, mlSeconds)

        if (mlSecondsCount === 99) {
            mlSecondsCount = 1
            secondsCount++;
            seconds.innerText = secondsCount
            formatDigits(secondsCount, seconds)
        }

        if (secondsCount === 60) {
            secondsCount = 0;
            seconds.innerText = secondsCount
            minutesCount++
            minutes.innerText = minutesCount
            formatDigits(secondsCount, seconds)
            formatDigits(minutesCount, minutes)
        }
    }, 10)
}


stopBtn.onclick = () => {
    clearInterval(stopWatchInterval)
}


resetBtn.onclick = () => {
    mlSecondsCount = 0;
    secondsCount = 0;
    minutesCount = 0;
    intervals.forEach(item => {
        item.innerText = "00"
    })
}

