
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
        let result = `<h2  class ="hide">items</h2>`;
        data.items.forEach(function(item){
            result += `
            <div>
                <h3>Title: ${item.volumeInfo.title}</h3>
                 <h5>Author(s): ${item.volumeInfo.authors}</h5>
                <h5>Publisher: ${item.volumeInfo.publisher}</h5>
                <h5>Publication  Date: ${item.volumeInfo.publishedDate}</h5>
                <h5>ISBN: ${item.volumeInfo.industryIdentifiers[1].identifier}</h5>
                 <p><img  src = ${item.volumeInfo.imageLinks.thumbnail}></p>
                 <br>
                 <p><button id ='view'>Browse</button></p>
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

google.books.load();

function initialize() {
    let viewer = new google.books.DefaultViewer(document.getElementById('viewerCanvas'));
    viewer.load(`ISBN: ${item.volumeInfo.industryIdentifiers[1].identifier}`);
  }

  document.querySelector('#view').addEventListener('click', initialize)

  google.books.setOnLoadCallback(initialize);


