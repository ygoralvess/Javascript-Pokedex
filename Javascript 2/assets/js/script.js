const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    fetch(url).then(function(response)  {
    response.json().then(function(responseBody) {
        return response.json()
    })
    .then(function(jsonBody) {
        response
        .json()
        .then(function (responseBody) {
            console.log(responseBody)
        })
        }
    })
    })
    .catch(function(error) {
        console.error(error)
    })
    .finally(function() {
        console.log('Requisição concluída!')
    }) 