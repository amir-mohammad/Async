class EasyHTTP {
    constructor() {
        this.http = new XMLHttpRequest();
    }


    // MAKE an HTTP request by GET
    get(url, callback) {

        this.http.open('GET', url, true);
        this.http.onload = () => {
            if (this.http.status === 200) {
                callback(null, this.http.responseText);
            } else {
                callback(`Error : ${this.http.status}`);
            }
        }
        this.http.send();
    }



    // MAKE an HTTP request by Post
    post(url, data , callback){
        this.http.open('POST' , url , true);
        this.http.setRequestHeader('Content-type' , 'application/json');
        this.http.onload = ()=>{
            callback(this.http.responseText);
        }

        this.http.send(JSON.stringify(data));
    }


    // MAKE an HTTP request by PUT
   
    put(url ,data , callback){
        this.http.open('PUT' , url , true);
        this.http.setRequestHeader('Content-type' , 'application/json');
        this.http.onload = ()=>{
            callback(this.http.responseText);
        }
        this.http.send(JSON.stringify(data));
    }

    // MAKE an HTTP request by DELETE
    delete(url , callback){
        this.http.open('DELETE', url, true);
        this.http.onload = () => {
            if (this.http.status === 200) {
                callback(null,'Post Deleted...');
            } else {
                callback(`Error : ${this.http.status}`);
            }
        }
        this.http.send();

    }
    
}