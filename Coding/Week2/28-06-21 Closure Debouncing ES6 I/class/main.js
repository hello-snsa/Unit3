console.log("script main.js is working")

let movies_div = document.getElementById('movies')

async function searchMovies() {
    let name = document.getElementById('query').value;
    if (name.length <= 2) {
        return false;
 
    }

    let response = await fetch(`https://www.omdbapi.com/?s=${name}&apikey=d806bd70`);

    let data = await response.json();
    // console.log('data: ',data)

    return data;

}
     
function appendMovies(movies) {

    movies_div.innerText=null;
    // movies.forEach((el) => {
    movies.forEach(({Title}) => {
        let p = document.createElement('p');
        // p.innerText = el.Title;
        p.innerText = Title;

        movies_div.append(p);


    })

}

async function main(){

    // let data= await  searchMovies();
    // appendMovies(data.Search);

    let {Search}= await  searchMovies();
    appendMovies(Search);

}