let posts = [
    {title:'Post One' , body:'this is post one'},
    {title:'Post Two' , body:'this is post Two'},
];

function createPost(post,callback){
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);

}


function getPosts(){

    setTimeout(() => {
        let output = '';
        posts.forEach(post => {
            output += `<li>${post.title}</li>`
        });

        document.body.innerHTML = output;
    }, 1000);
}

createPost({title:'Post Three' , body:'this is post three'},getPosts);
