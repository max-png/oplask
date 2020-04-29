const urlString = "https://api.unsplash.com/search/photos?query=searchTerm&client_id=Fsoh1OYOMgH1WKiD6oO2XOh87SzDSKlwKfXTEkC_kLM"

async function fetchSearchResult(search){
    let searchUrlString = urlString.replace("searchTerm", search);

    let response = await fetch(searchUrlString)
    data = await response.json()
    console.log(data.results)
    
    renderSearchResult(data.results)
}

function renderSearchResult(results) {
    results.forEach(element => {
        let newImage = document.createElement("img")
        newImage.src = element.urls.small
        document.querySelector(".imgContainer").appendChild(newImage);
    });
}


fetchSearchResult("city")