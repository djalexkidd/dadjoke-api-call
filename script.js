const APICALL = "https://icanhazdadjoke.com/"
const joke = document.querySelector('.joke')
const button = document.querySelector('.getanother')

// Création d'une fonction asynchrone
async function anotherJoke() {
    const reponse = await fetch(`${APICALL}`, {
        headers: {
            'Accept': 'application/json'
        }
    })
    const data = await reponse.json()
    console.log(data)

    creationBlague(data)
}

// Affichage de la blague
function creationBlague(output) {
    joke.innerText = `${output.joke}`
}

// Bouton pour générer une autre blague
button.addEventListener('click', anotherJoke)

anotherJoke()