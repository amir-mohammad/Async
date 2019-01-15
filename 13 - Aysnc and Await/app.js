async function getUsers(url){
  
    let response = await fetch(url);
    let users = await response.json();

    return users;
        // fetch(url).then(res => res.json())
        // .then(users => resolve(users)).
        // catch(err => reject(err));
    
}


getUsers('https://jsonplaceholder.typicode.com/users')
.then(users => console.log(users))
.catch(err => console.log(err))