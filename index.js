let userList = document.getElementById("user-list")

async function getUsers () {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    
    const json = await response.json();

    console.log(json);

    json.forEach(element => {
        userName = document.createElement("li");
        // userName.innerHTML = `<li>${element.name}</li>`;
        userName.textContent = element.name;

        userList.appendChild(userName);
    });
};

getUsers();