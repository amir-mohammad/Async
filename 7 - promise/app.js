let posts = [
    {title:'Post One' , body:'this is post one'},
    {title:'Post Two' , body:'this is post Two'},
];

function createPost(post){
    return new Promise(function(resovle,reject){
        setTimeout(() => {
            posts.push(post);
            let err = false;
            if(!err){
                resovle();
            }else{
                reject('Error: Somthing went wrong...');
            }
           
         
        }, 2000);
    })
   

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

createPost({title:'Post Three' , body:'this is post three'}).then(getPosts);
