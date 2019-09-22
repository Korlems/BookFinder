
document.querySelector('#button').addEventListener('click', bookSearch);

function bookSearch(){
   
    let item, title, author,  publisher, booklink, bookImage;
    let searchData = document.querySelector('#search').value;
    let searchResults = document.querySelector("#searchResults");   
    let myHeader =  document.querySelector("#header");   
    let placeholder = "https://via.placeholder.com/300";
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
                <h5>Publisher: ${item.volumeInfo.publisher}</h5>
                <h5>Publication  Date: ${item.volumeInfo.publishedDate}</h5>
                <h5>ISBN: ${item.volumeInfo.industryIdentifiers[1].identifier}</h5>
                 
                 <br>
                 <p class="hide" ><button id ='view'>Browse</button></p>
                 <br>
            </div> 
            `;
        });
       
        document.querySelector('#searchResults').innerHTML = result;
        
   })
    .catch(error =>{
        console.error(error);

    });
}

 

