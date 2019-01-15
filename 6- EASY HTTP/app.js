let http = new EasyHTTP();

//get all post
// http.get('https://jsonplaceholder.typicode.com/posts',function(err,posts){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(posts);
//     }
// });

// get single post

// http.get('https://jsonplaceholder.typicode.com/posts/5', function(err,post){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(post);
//     }

// });

// ADD POST
let data = { title: 'Custom post one', body: 'this is custom post one' };
// http.post('https://jsonplaceholder.typicode.com/posts', data ,function(err, post){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(post);
//     }

// })

// Update Post
// http.put('https://jsonplaceholder.typicode.com/posts/2', data, function (err, post) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }

// });

// DElETE Post
http.delete('https://jsonplaceholder.typicode.com/posts/2', function (err, response) {
    if (err) {
        console.log(err);
    } else {
        console.log(response);
    }
})