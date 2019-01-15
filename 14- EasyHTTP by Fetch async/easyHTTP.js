class EasyHTTP{
   async get(url){
      let response = await fetch(url);
      let users = await response.json();
      return users;
            // fetch(url)
            // .then((res)=>{ return res.json()})
            // .then( data =>  resolve(data))
            // .catch(err => reject(err));
      
       
    }

   async post(url,data){
       
         let reponse = await   fetch(url,{
                method:'POST',
                headers:{
                    'Content-type':'application/json'
                },
                body: JSON.stringify(data)
            })
            
       let user =  await  reponse.json();
         return  user;
        
    }

   async put(url,data){
       
           let response = await fetch(url,{
                method:'PUT',
                headers:{
                    'Content-type':'application/json'
                },
                body: JSON.stringify(data)
            })
            
            let user = await response.json();
            return user;
        
    }
   async delete(url){
       
         let response = await   fetch(url,{
                method:'DELETE',
                headers:{
                    'Content-type':'application/json'
                },
                
            });
            let resData = await 'User DELETED...';
            return resData;
        
       
    }
}