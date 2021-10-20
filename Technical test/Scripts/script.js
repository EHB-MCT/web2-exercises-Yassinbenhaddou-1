window.onload = () =>{

    let apiUrl = "https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=";
    let apiKey = "BkPVOs1H6NhplrQDz6vRDEapEE0zw6qarW8yjcOL";

    fetch(apiUrl+apiKey)
    .then(response => response.json())
    .then(data => console.log(data))

}