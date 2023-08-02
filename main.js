const modalContainer = document.getElementById('modalContainer')
const openModal = document.getElementById('openModal')
const youtubeIframe = document.getElementById('ytIframe')

openModal.addEventListener('click', () => {
    modalContainer.style.display = 'block'
})

window.addEventListener('click', e => {
    if (e.target == modalContainer) {
        modalContainer.style.display = 'none'
        youtubeIframe.src = youtubeIframe.src
    }
})

function playAudio() {
    let audio = document.getElementById('audio')
    audio.play()
    document.querySelector('.ph-speaker-slash').style.display = 'block'
    document.querySelector('.ph-speaker-high').style.display = 'none'
}

function stopAudio() {
    let audio = document.getElementById('audio')
    audio.pause()
    document.querySelector('.ph-speaker-high').style.display = 'block'
    document.querySelector('.ph-speaker-slash').style.display = 'none'

}