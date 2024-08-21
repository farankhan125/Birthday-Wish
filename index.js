document.addEventListener('DOMContentLoaded', () => {
    celebrateButton = document.querySelector('.celeb-button')
    loveButton = document.querySelector('.love-button')
    ballonRight = document.querySelector('.ballons-right')
    ballonLeft = document.querySelector('.ballons-left')
    const jsConfetti = new JSConfetti()

    celebrateButton.addEventListener('click', () => {
        document.querySelector('body').scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })

        celebrateButton.classList.add('celeb-button-effect')
        setTimeout(() => {
            celebrateButton.classList.remove('celeb-button-effect')
        },300);

        setTimeout(() => {
            ballonRight.style.top = ('-120vw')
            ballonLeft.style.top = ('-120vw')
            confetti.start()
        },1000);

        setTimeout(() => {
            confetti.stop()
        },6000)
    });


    loveButton.addEventListener('click', () => {
        loveButton.classList.add('celeb-button-effect')
        setTimeout(() => {
            loveButton.classList.remove('celeb-button-effect')
        },300);
        jsConfetti.addConfetti({ emojis: ['❤️'],})
    });


    fullCard = document.querySelector('.card-space')
    cardTop = document.querySelector('.card-top')
    cardInsideLeft = document.querySelector('.card-inside-left')
    cardInsideLeft2 = document.querySelector('.card-inside-left-two')
    cardInsideRight = document.querySelector('.card-inside-right')

    cardTop.addEventListener('click', () => {
        cardTop.classList.add('add-top')
        cardInsideLeft.classList.add('add-left')
        cardInsideLeft2.classList.add('add-left')
    })

    cardInsideRight.addEventListener('click', () => {
        setTimeout(() => {cardTop.classList.remove('add-top')},80)
        setTimeout(() => {cardInsideLeft.classList.remove('add-left')},15)
        cardInsideLeft2.classList.remove('add-left')
    })

});