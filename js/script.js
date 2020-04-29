const urlString = "https://api.unsplash.com/search/photos?query=searchTerm&page=pageNumber&per_page=itemsPerPage&client_id=Fsoh1OYOMgH1WKiD6oO2XOh87SzDSKlwKfXTEkC_kLM"

const serachContainer = document.querySelector(".search-container");
const serachInput = serachContainer.querySelector("input.searchInput");
const searchButtons = serachContainer.querySelectorAll("button.search");

const resultContainer = document.querySelector("section.imgContainer");

// resultContainer.innerHTML = `<p>Hej Hej!</p>`

searchButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        let serachText = serachContainer.querySelector("input.searchInput").value;
        fetchSearchResult(serachText, resultContainer, 1, 10)
    });
});

serachInput.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
        event.preventDefault();
        searchButtons[0].click();
    }
});

async function fetchSearchResult(search, container, page, pageSize) {
    let searchUrlString = urlString.replace("searchTerm", search)
    searchUrlString = searchUrlString.replace("pageNumber", page)
    searchUrlString = searchUrlString.replace("itemsPerPage", pageSize)

    const response = await fetch(searchUrlString) //prova const?
    const data = await response.json()
    // console.log(data.results)

    renderSearchResult(data.results, container)
}


function renderSearchResult(results, container) {
    results.forEach(element => {
        createAndAddImage(element.urls.small, container)
    });
}

function createAndAddImage(url, container) {
    let newImage = document.createElement("img")
    newImage.src = url
    // document.querySelector(container).appendChild(newImage);
    container.appendChild(newImage);
}