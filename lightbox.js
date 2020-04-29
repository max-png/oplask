// const data = require('./unsplash_response.json')

// const results = data.results

// const shortendResults = results.map(
//     result => {
//         const newResult = {}
//         newResult.id = result.id
//         newResult.urls = {
//             raw: result.urls.raw,
//             full: result.urls.full,
//             regular: result.urls.regular,
//             small: result.urls.small,
//             thumb: result.urls.thumb,
//         };
//         newResult.links = {
//             download: result.links.download,
//             download_location: result.links.download_location,
//         };
//         newResult.user = {
//             name: result.user.name,
//             portfolio_url: result.user.portfolio_url,
//         };
//         return newResult
//     }
// )

let localStorageResults = [
    {
      id: 'jFCViYFYcus',
      urls: {
        raw: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEzMDg5Mn0',
        full: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjEzMDg5Mn0',
        regular: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEzMDg5Mn0',
        small: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzMDg5Mn0',   
        thumb: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEzMDg5Mn0'    
      },
      links: {
        download: 'https://unsplash.com/photos/jFCViYFYcus/download',
        download_location: 'https://api.unsplash.com/photos/jFCViYFYcus/download'
      },
      user: {
        name: 'Lukasz Szmigiel',
        portfolio_url: 'https://photo.szmigiel.design/'
      }
    },
    {
      id: 'MMJx78V7xS8',
      urls: {
        raw: 'https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEzMDg5Mn0',
        full: 'https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjEzMDg5Mn0',
        regular: 'https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEzMDg5Mn0',
        small: 'https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzMDg5Mn0',
        thumb: 'https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEzMDg5Mn0'
      },
      links: {
        download: 'https://unsplash.com/photos/MMJx78V7xS8/download',
        download_location: 'https://api.unsplash.com/photos/MMJx78V7xS8/download'
      },
      user: {
        name: 'Steven Kamenar',
        portfolio_url: 'http://www.stevenkamenar.com'
      }
    },
    {
      id: 'sp-p7uuT0tw',
      urls: {
        raw: 'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEzMDg5Mn0',
        full: 'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjEzMDg5Mn0',
        regular: 'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEzMDg5Mn0',
        small: 'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzMDg5Mn0',
        thumb: 'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEzMDg5Mn0'
      },
      links: {
        download: 'https://unsplash.com/photos/sp-p7uuT0tw/download',
        download_location: 'https://api.unsplash.com/photos/sp-p7uuT0tw/download'
      },
      user: {
        name: 'Sebastian Unrau',
        portfolio_url: 'https://www.curtbain.com'
      }
    },
    {
      id: 'x3dzBoQYrFA',
      urls: {
        raw: 'https://images.unsplash.com/photo-1507500844113-546121f3ac51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEzMDg5Mn0',
        full: 'https://images.unsplash.com/photo-1507500844113-546121f3ac51?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjEzMDg5Mn0',
        regular: 'https://images.unsplash.com/photo-1507500844113-546121f3ac51?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEzMDg5Mn0',
        small: 'https://images.unsplash.com/photo-1507500844113-546121f3ac51?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzMDg5Mn0',
        thumb: 'https://images.unsplash.com/photo-1507500844113-546121f3ac51?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEzMDg5Mn0'
      },
      links: {
        download: 'https://unsplash.com/photos/x3dzBoQYrFA/download',
        download_location: 'https://api.unsplash.com/photos/x3dzBoQYrFA/download'
      },
      user: { name: 'Valeriy Andrushko', portfolio_url: null }
    },
    {
      id: 'wizj0ppghD0',
      urls: {
        raw: 'https://images.unsplash.com/photo-1491982883790-ead7c97a047e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEzMDg5Mn0',
        full: 'https://images.unsplash.com/photo-1491982883790-ead7c97a047e?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjEzMDg5Mn0',
        regular: 'https://images.unsplash.com/photo-1491982883790-ead7c97a047e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEzMDg5Mn0',
        small: 'https://images.unsplash.com/photo-1491982883790-ead7c97a047e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzMDg5Mn0',
        thumb: 'https://images.unsplash.com/photo-1491982883790-ead7c97a047e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEzMDg5Mn0'
      },
      links: {
        download: 'https://unsplash.com/photos/wizj0ppghD0/download',
        download_location: 'https://api.unsplash.com/photos/wizj0ppghD0/download'
      },
      user: { name: 'france perles', portfolio_url: null }
    },
    {
      id: 'PSFfI7vbS3c',
      urls: {
        raw: 'https://images.unsplash.com/photo-1487111023822-2e903e12f6f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEzMDg5Mn0',
        full: 'https://images.unsplash.com/photo-1487111023822-2e903e12f6f0?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjEzMDg5Mn0',
        regular: 'https://images.unsplash.com/photo-1487111023822-2e903e12f6f0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEzMDg5Mn0',
        small: 'https://images.unsplash.com/photo-1487111023822-2e903e12f6f0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzMDg5Mn0',
        thumb: 'https://images.unsplash.com/photo-1487111023822-2e903e12f6f0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEzMDg5Mn0'
      },
      links: {
        download: 'https://unsplash.com/photos/PSFfI7vbS3c/download',
        download_location: 'https://api.unsplash.com/photos/PSFfI7vbS3c/download'
      },
      user: {
        name: 'Filip Zrnzević',
        portfolio_url: 'https://instagram.com/filipz__'
      }
    },
    {
      id: 'IrGYJPF0JS0',
      urls: {
        raw: 'https://images.unsplash.com/photo-1456030680012-9aa5bd962cc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEzMDg5Mn0',
        full: 'https://images.unsplash.com/photo-1456030680012-9aa5bd962cc4?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjEzMDg5Mn0',
        regular: 'https://images.unsplash.com/photo-1456030680012-9aa5bd962cc4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEzMDg5Mn0',
        small: 'https://images.unsplash.com/photo-1456030680012-9aa5bd962cc4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzMDg5Mn0',
        thumb: 'https://images.unsplash.com/photo-1456030680012-9aa5bd962cc4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEzMDg5Mn0'
      },
      links: {
        download: 'https://unsplash.com/photos/IrGYJPF0JS0/download',
        download_location: 'https://api.unsplash.com/photos/IrGYJPF0JS0/download'
      },
      user: { name: 'Amos G', portfolio_url: 'http://www.amosgwa.com' }
    },
    {
      id: 'P3DxOe-OJGA',
      urls: {
        raw: 'https://images.unsplash.com/photo-1492486169476-8c5dafd9539f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEzMDg5Mn0',
        full: 'https://images.unsplash.com/photo-1492486169476-8c5dafd9539f?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjEzMDg5Mn0',
        regular: 'https://images.unsplash.com/photo-1492486169476-8c5dafd9539f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEzMDg5Mn0',
        small: 'https://images.unsplash.com/photo-1492486169476-8c5dafd9539f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzMDg5Mn0',
        thumb: 'https://images.unsplash.com/photo-1492486169476-8c5dafd9539f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEzMDg5Mn0'
      },
      links: {
        download: 'https://unsplash.com/photos/P3DxOe-OJGA/download',
        download_location: 'https://api.unsplash.com/photos/P3DxOe-OJGA/download'
      },
      user: { name: 'Tuce', portfolio_url: 'http://www.jucetuce.com' }
    },
    {
      id: 'd6kSvT2xZQo',
      urls: {
        raw: 'https://images.unsplash.com/photo-1440581572325-0bea30075d9d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEzMDg5Mn0',
        full: 'https://images.unsplash.com/photo-1440581572325-0bea30075d9d?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjEzMDg5Mn0',
        regular: 'https://images.unsplash.com/photo-1440581572325-0bea30075d9d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEzMDg5Mn0',
        small: 'https://images.unsplash.com/photo-1440581572325-0bea30075d9d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzMDg5Mn0',
        thumb: 'https://images.unsplash.com/photo-1440581572325-0bea30075d9d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEzMDg5Mn0'
      },
      links: {
        download: 'https://unsplash.com/photos/d6kSvT2xZQo/download',
        download_location: 'https://api.unsplash.com/photos/d6kSvT2xZQo/download'
      },
      user: { name: 'Gustav Gullstrand', portfolio_url: null }
    },
    {
      id: 'sMQiL_2v4vs',
      urls: {
        raw: 'https://images.unsplash.com/photo-1453791052107-5c843da62d97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEzMDg5Mn0',
        full: 'https://images.unsplash.com/photo-1453791052107-5c843da62d97?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjEzMDg5Mn0',
        regular: 'https://images.unsplash.com/photo-1453791052107-5c843da62d97?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEzMDg5Mn0',
        small: 'https://images.unsplash.com/photo-1453791052107-5c843da62d97?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzMDg5Mn0',
        thumb: 'https://images.unsplash.com/photo-1453791052107-5c843da62d97?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEzMDg5Mn0'
      },
      links: {
        download: 'https://unsplash.com/photos/sMQiL_2v4vs/download',
        download_location: 'https://api.unsplash.com/photos/sMQiL_2v4vs/download'
      },
      user: { name: 'veeterzy', portfolio_url: null }
    }
  ];


  const body = document.querySelector("body");
  const lightboxBG = document.querySelector(".lightbox-container");
  const lightboxClosBtn = lightboxBG.querySelector("button.close");
  lightboxClosBtn.addEventListener("click", (event)  => {
    document.querySelector(".lightbox-container").style.display = "none";
  })


 


  function renderResults (resultList, container) {
      resultList.forEach(image => {
        let resultImage = document.createElement("img")
        resultImage.classList.add("result-thumb")
        resultImage.src = image.urls.thumb
        resultImage.addEventListener("click", (event) => {
            document.querySelector(".lightbox-container").style.display = "block";
            document.querySelector(".lightbox-container").style.display = "block";

        });

        container.append(resultImage)
      });
  }

  renderResults(localStorageResults, body)




//   localStorageResults



