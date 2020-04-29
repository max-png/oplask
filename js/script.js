const urlString = "https://api.unsplash.com/search/photos?query=searchTerm&page=pageNumber&per_page=itemsPerPage&client_id=Fsoh1OYOMgH1WKiD6oO2XOh87SzDSKlwKfXTEkC_kLM"

async function fetchSearchResult(search, container, page, pageSize){
    let searchUrlString = urlString.replace("searchTerm", search)
    searchUrlString = searchUrlString.replace("pageNumber", page)
    searchUrlString = searchUrlString.replace("itemsPerPage", pageSize)

    let response = await fetch(searchUrlString)
    data = await response.json()
    console.log(data.results)
    
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
    document.querySelector(container).appendChild(newImage);
}


fetchSearchResult("city", "imgContainer", 1, 4)