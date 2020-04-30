const robert_id = 'IQl3Mq0LJbFmX1uzo2gwi6YUuToh-55QC5HpKTeQcZs'
const fabian_id = 'Fsoh1OYOMgH1WKiD6oO2XOh87SzDSKlwKfXTEkC_kLM'

const client_id = fabian_id

const urlString = `https://api.unsplash.com/search/photos?query=searchTerm&page=pageNumber&per_page=itemsPerPage&client_id=${client_id}`
let localStorageResults = []
let localStorageFavourties = []

const serachContainer = document.querySelector(".search-container");
const serachInput = serachContainer.querySelector("input.searchInput");
const searchButtons = serachContainer.querySelectorAll("button.search");
const resultContainer = document.querySelector("section.search-result-container");
const homeButton = document.querySelector("button.home")
const likesButton = document.querySelector("button.myLikes")
const subTitle = document.querySelector(".subTitle")
const imagePrototypeListView = document.querySelector(".result-image.list-view.prototype");

let globalPage = 1;
let serachText;

searchButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        clear()
        serachText = serachInput.value
        subTitle.innerHTML = serachText
        console.log("Sätter page till 1")
        globalPage = 1
        localStorageResults = []

        fetchSearchResult(serachText, resultContainer, globalPage, 10)
    });
});

serachInput.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
        event.preventDefault();
        searchButtons[0].click();
    }
});

function createObjectToStore(source) {
    let { id, urls, links, user } = source
    let copy = { id, urls, links, user }
    return copy
}

async function fetchSearchResult(search, container, page, pageSize) {
    globalPage++
    let searchUrlString = urlString.replace("searchTerm", search)
    searchUrlString = searchUrlString.replace("pageNumber", page)
    searchUrlString = searchUrlString.replace("itemsPerPage", pageSize)

    const response = await fetch(searchUrlString) //prova const?
    const data = await response.json()

    data.results.forEach(result => localStorageResults.push(createObjectToStore(result)))
    // console.log(`Printar localStorageResults ${localStorageResults}`)
    // console.log(`Printar localStorageResults ${JSON.stringify(localStorageResults)}`)

    renderSearchResult(data.results, container)
    // renderSearchResult(localStorageResults, container)

    // console.log(`Sätter page till ${globalPage} + 1 `)
    // console.log(`kontroll, nu är det page = ${globalPage} `)
}


function renderSearchResult(results, container) {
    results.forEach(element => {
        createAndAddImage(element, container)
    });
}

function createAndAddImage(result, container) {
    let newImage = imagePrototypeListView.cloneNode(true)
    newImage.classList.remove("prototype")
    let favourtieSymbol = newImage.querySelector("svg.button-icon")
    newImage.querySelector("p.owner").innerHTML = `${result.user.name}`
    newImage.querySelector(".img-container>img").src = `${result.urls.small}`
    newImage.querySelector("button.like").addEventListener("click", (event) => {
            addToFavourite(result)
            favourtieSymbol.classList.toggle("true")
            // alert(`${JSON.stringify(result)}`)
        })
    newImage.querySelector(".download").href = `${result.links.download}?force=true`

    container.appendChild(newImage)
}

function loadMore() {
    console.log("loadMore(), page++")
    fetchSearchResult(serachText, resultContainer, globalPage, 10)
}
window.onscroll = function (ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
        if (globalPage != 1) {
            loadMore()
        }
    }
};

function addToFavourite(imageToAdd) {
    console.log(`Favoritlista har ${localStorageFavourties.length} objekt innan`)
    localStorageFavourties.push(createObjectToStore(imageToAdd))
    console.log(`Favoritlista har nu ${localStorageFavourties.length} objekt istället`)
    // console.log(JSON.stringify(localStorageFavourties))
}

function removeFromFavourite(imageToRemove) {
    console.log(`Favoritlista har ${localStorageFavourties.length} objekt innan`)
    localStorageFavourties = localStorageFavourties.filter(favourite => favourite.id !== imageToRemove.id)
    console.log(`Favoritlista har nu ${localStorageFavourties.length} objekt istället`)

    // console.log(JSON.stringify(localStorageFavourties))
}



function clear() {
    subTitle.innerHTML = ""
    resultContainer.innerHTML = ""
    globalPage = 1

}

likesButton.addEventListener("click", function () {
    console.log("Like")
})

homeButton.addEventListener("click", function () {
    console.log("Clear")
    clear()
})

console.log(imagePrototypeListView)