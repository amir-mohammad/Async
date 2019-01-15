let customerBtn = document.querySelector('#customerBtn');
let customersBtn = document.querySelector('#customersBtn');

customerBtn.addEventListener('click' , loadCustomer);
customersBtn.addEventListener('click' , loadCustomers);


function loadCustomer(){

    let xhr = new XMLHttpRequest();

    xhr.open('GET' , 'customer.json' , true);

    xhr.onload = function(){
        if(this.status === 200){
           let customer = JSON.parse(this.responseText);
           let output =`
            <ul>
                <li>ID : ${customer.id}</li>
                <li>Name : ${customer.name}</li>
                <li>Company : ${customer.company}</li>
                <li>Phone : ${customer.phone}</li>
            
            </ul>` ;
           document.querySelector('#customer').innerHTML = output;
        }
    }
    xhr.send();
}

function loadCustomers(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET' , 'customers.json' , true);
    xhr.onload = function(){
        if(this.status === 200){
            let customers = JSON.parse(this.responseText);
            let output = '';
            customers.forEach(customer => {
                output +=  `<ul>
                <li>ID : ${customer.id}</li>
                <li>Name : ${customer.name}</li>
                <li>Company : ${customer.company}</li>
                <li>Phone : ${customer.phone}</li>
            
            </ul>` ;

            document.querySelector('#customers').innerHTML = output;

            });
        }
    }
    xhr.send();
}