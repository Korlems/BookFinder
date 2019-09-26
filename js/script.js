
document.querySelector('#button').addEventListener('click', bookSearch);

function bookSearch(){
   
    
    let searchData = document.querySelector('#search').value;
    let searchResults = document.querySelector("#searchResults");   
    let myHeader =  document.querySelector("#header");   
   
   let url = "https://www.googleapis.com/books/v1/volumes?q=" + searchData;
   myHeader.style.display = "none";
   fetch(url)
   .then((response) =>  response.json())
   .then((data) => {
        let result = `<h2  class ="hide">items</h2>`;
        data.items.forEach(function(item){
            result += `
            <div id='card'>
                        <h3>Title: ${item.volumeInfo.title}</h3>
                        <p><img  src = ${item.volumeInfo.imageLinks.thumbnail}></p>
                        <h5>Author(s): ${item.volumeInfo.authors}</h5>
                        <h5>Publisher: ${item.volumeInfo.publisher} </h5>                                                                  
                        <h5>ISBN: ${item.volumeInfo.industryIdentifiers[1].identifier} </h5>                         
                        <a href=${item.volumeInfo.infoLink}><button  id ='view'>Browse</button></a>                                                                                     
            </div> 
            `;
        });
       
        document.querySelector('#searchResults').innerHTML = result;
        
        
   })
    .catch(error =>{
        console.log("Something went wrong!");
    });
    
}
 

