 let http = new EasyHTTP();
// get all users
//   http.get('https://jsonplaceholder.typicode.com/users')
//   .then(users => console.log(users))
//   .catch(err => console.log(err));


//get single users

// http.get('https://jsonplaceholder.typicode.com/users/5')
//     .then(user => console.log(user))
//     .catch(err => console.log(err));    

 let user = {name:'John Doe' , username: 'johndoe' , email:'ex@gmail.com'};
// http.post('https://jsonplaceholder.typicode.com/users',user)
// .then( user => console.log(user))
// .catch(err => console.log(err));

// http.put('https://jsonplaceholder.typicode.com/users/5',user)
// .then(user => console.log(user))
// .catch(err => console.log(err));

http.delete('https://jsonplaceholder.typicode.com/users/5')
.then( response => console.log(response))
.catch(err => console.log(err));