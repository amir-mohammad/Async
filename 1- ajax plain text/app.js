let button = document.querySelector('#get-data');

button.addEventListener('click' , loadData);


function loadData(){
    let xhr = new XMLHttpRequest();

    xhr.open('GET' , 'data.txt' , true);

    xhr.onprogress = function(){
        console.log(this.readyState);
    }

    xhr.onload = function(){
        if(this.status === 200){
           document.querySelector('.output').innerHTML = `<h1>${this.responseText}</h1>`;
        }
    }

    xhr.send();
}