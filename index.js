fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
    //   .then(json => console.log(json))
      .then(json => json.forEach(element => {
        console.log(element.name)
      }))

fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(json => json.forEach(element => {
        console.log(element.title)
      }))