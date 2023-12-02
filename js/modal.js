// MODAL

const modal = document.querySelector('.modal')
const modalCloseButton = document.querySelector('.modal_close')
const triggerModal = document.querySelector('#btn-get')

const openModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
}

const closeModal = () => {
    modal.style.display = 'none'
    document.body.style.overflow = ''
}

triggerModal.onclick = () => openModal()
modalCloseButton.onclick = () => closeModal()
modal.onclick = (event) => {
    if (event.target === modal)
    modal()
}

setTimeout(openModal, 10000)

const openModalAtEnd = () => {
    const windowHeight = window.innerHeight;
    const scrollDistance = window.scrollY;
    const documentHeight = document.body.scrollHeight;
    if (scrollDistance + windowHeight >= documentHeight - 1) {
        openModal()
        window.removeEventListener("scroll", openModalAtEnd)
    }
}

window.addEventListener("scroll", openModalAtEnd)