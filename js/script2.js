
document.querySelector('#button').addEventListener('click', bookSearch);

function bookSearch(){
    let item, title, author,  publisher, booklink, bookImage;
    let searchData = document.querySelector('#search').value;
    let searchResults = document.querySelector("#searchResults");
    let placeholder = "https://via.placeholder.com/300";
   let url = "https://www.googleapis.com/books/v1/volumes?q=" + searchData;
   fetch(url)
   .then((response) =>  response.json())
   .then((data) => {
        let result = `<h2>items</h2>`;
        data.items.forEach(function(item){
            result += `
            <div>
                <h3>${item.volumeInfo.title}</h3>
                 <h5>${item.volumeInfo.authors}</h5>
                <p>${item.volumeInfo.publisher}</p>
                <p>${item.volumeInfo.publishedDate}</p>
                <p>${item.volumeInfo.industryIdentifiers[1].identifier}</p>
                <p>${(item.volumeInfo.imageLinks) ? item.volumeInfo.imageLinks.thumbnail : placeholder }</p>
                <p><img  src = ${item.volumeInfo.imageLinks.thumbnail}></p>
            </div> 
            `;
        });
        document.querySelector('#searchResults').innerHTML = result;
        
   })
    .catch(error =>{
        console.error(error);

    });
}


