window.onload = () => 
{

    //step 1 & step 2
    /*
    fetch("http://www.omdbapi.com/?i=tt6751668&apikey=cb08d5c5")
    .then(response => response.json())
    .then(data => console.log(data));
    */

    //step3
    let apiUrl = "http://www.omdbapi.com/";
    let apiKey = "&apikey=cb08d5c5";
    let searchResult;

    document.getElementById("searchform").addEventListener('submit', e => {
        e.preventDefault();
        searchResult = document.getElementById("inputTitle").value;
        console.log(searchResult);

        document.getElementById("result").innerHTML ="";

        fetch(apiUrl + "?s=" + searchResult+apiKey)
        .then(response => response.json())
        .then(data => printHtml(data.Search));
    });

}

function printHtml(results)
{

   results.forEach(result => {

    console.log(result);
    document.getElementById("result").innerHTML += `
    <div class="card mb-3" style="max-width: 540px;">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img src="${result.Poster}" class="card-img" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
        
          <h5 class="card-title">${result.Title}</h5>
          <p class="card-text">${result.Year}</p>
          <p class="card-text"><small class="text-muted">${result.Runtime}</small></p>
          
        </div>
        
      </div>
    </div>
    <div class="btn-group mb-3">
    <button type="button" class="btn btn-outline-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path></svg>
      <span class="visually-hidden"></span>
    </button>
  </div>
  </div>`

   });
}