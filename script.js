document.addEventListener('DOMContentLoaded', () => {
    //tarjetas disponibles
    const cardArray = [
        {
            name: 'bulldog',
            img: 'images/bulldog.png'
        },
        {
            name: 'bulldog',
            img: 'images/bulldog.png'
        },
        {
            name: 'corgi',
            img: 'images/corgi.png'
        },
        {
            name: 'corgi',
            img: 'images/corgi.png'
        },
        {
            name: 'feliz',
            img: 'images/feliz.png'
        },
        {
            name: 'feliz',
            img: 'images/feliz.png'
        },
        {
            name: 'golden',
            img: 'images/golden.png'
        },
        {
            name: 'golden',
            img: 'images/golden.png'
        },
        {
            name: 'mezcal',
            img: 'images/mezcal.png'
        },
        {
            name: 'mezcal',
            img: 'images/mezcal.png'
        },
        {
            name: 'perronegro',
            img: 'images/perronegro.png'
        },
        {
            name: 'perronegro',
            img: 'images/perronegro.png'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    const cardsWon = []

    //tablero de memoria
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    //cartas iguales
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        if (optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
            alert('Seleccionaste la misma imagen')
        }
        else if (cardsChosen[0] === cardsChosen[1]) {
            alert('¡Lo lograste es un match!')
            cards[optionOneId].setAttribute('src', 'images/white.png')
            cards[optionTwoId].setAttribute('src', 'images/white.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
            alert('Upsi dupsi, inténtalo de nuevo')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = ' Muy bien, encontraste a todos los perritos'
        }
    }

    //vuelta de la tarjeta
    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()
})
