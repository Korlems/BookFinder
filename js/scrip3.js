document.querySelector('#button').addEventListener('click', bookSearch);

function bookSearch(){
    let search = document.querySelector('#search').value;
    let searchResults = document.querySelector("#searchResults").innerHTML;
   let url = "https://www.googleapis.com/books/v1/volumes?q=" +search;
   fetch(url)
   .then(function(response){
       return response.json();
   })
   .then(function(data){
       console.log(data) ;
   });
}

