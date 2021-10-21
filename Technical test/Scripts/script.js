window.onload = () =>{

    let solarSystemApiUrl = "https://api.le-systeme-solaire.net/rest/bodies/";
    let issApiUrl = "https://wheretheiss.at/w/developer";
    let peopleApiUrl = "http://api.open-notify.org/astros.json";
    let articleApiUrl = "https://api.spaceflightnewsapi.net/v3/articles";

    document.getElementById("articleBtn").onclick = () =>{
        document.getElementById("planets").style.display = "none";
        document.getElementById("articles").style.display = "block";
    }

    document.getElementById("planetBtn").onclick = () =>{
        document.getElementById("planets").style.display = "block";
        document.getElementById("articles").style.display = "none";
    }
    
    

    fetch(solarSystemApiUrl)
    .then(response => response.json())
    .then(data => 
        data.bodies.forEach(planet => {
            if(planet.isPlanet)
            {
                printHtml(planet)
            }
        })
    );

    fetch(articleApiUrl)
    .then(response => response.json())
    .then(articles => printArticles(articles));

    fetch(peopleApiUrl)
    .then(response => response.json())
    .then(issData => console.log(issData));

   
}

function printHtml(planet)
{
    console.log(planet)
    document.getElementById("planets").innerHTML += `
    <br />
    <div> 
      <h2>${planet.englishName}</h2>
      <h3>discovered By ${planet.discoveredBy}</h3>
      <p>${planet.density}</p>
    </div>
    `;
    
}

function printArticles(articles)
{
    articles.forEach(article =>{
        
        document.getElementById("articles").innerHTML += `
        <br />
        <div> 
         <h2>${article.title}</h2>
         <h3>discovered By ${article.summary}</h3>
         <img src="${article.imageUrl}">
        </div>
    `;
        console.log(article)
    });
}