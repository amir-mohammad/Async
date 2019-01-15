document.querySelector('#button1').addEventListener('click', getText);
document.querySelector('#button2').addEventListener('click' , getJson);
document.querySelector('#button3').addEventListener('click', getApi);

function getText(){
    fetch('test.txt').then((res)=>{
       return res.text();
    }).then(function(data){
       document.querySelector('.output').innerHTML = data;
    })
    .catch(function(err){
        console.log(err);
    });
}

function getJson(){
    fetch('posts.json').then((res)=>{
        return res.json();
    }).then((data)=>{
        let output = '';
        data.forEach(post => {
            output +=`<li>${post.title}</li>`;
        });

        document.querySelector('.output').innerHTML = output;
    }).catch((err)=>{

        console.log(err);
    })
}

function getApi(){
    fetch('https://api.github.com/users').then((res)=>{
            return res.json();
    }).then((data)=>{
        let output = '';
        data.forEach(user => {
            output +=`<li>${user.login}</li>`;
        });

        document.querySelector('.output').innerHTML = output;
    }).catch((err)=>{
        console.log(err);
    });
}