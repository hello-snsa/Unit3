console.log("script debouncing.js is working")

let movies_div = document.getElementById('movies')

async function searchMovies() {
    let name = document.getElementById('query').value;

    let response = await fetch(`https://www.omdbapi.com/?s=${name}&apikey=d806bd70`);

    let data = await response.json();
    console.log('data: ', data)

    return data;

}

function appendMovies(movies) {

    movies_div.innerText = null;
    // movies.forEach((el) => {
    movies.forEach(({ Title, Poster }) => {
        let Div = document.createElement('div');
        let p = document.createElement('p');
        let img = document.createElement('img');
        // p.innerText = el.Title;
        Div.setAttribute('class', 'resultDiv');
        // Div.class = "resultDiv";
        p.innerText = Title;
        img.src = Poster;

        img.style.width = "50px";
        img.style.height = "50px";
        console.log("poster", Poster)
        Div.innerHTML = p.innerText + `<img src=${Poster} style="width:50px; height:50px" />`;
        // Div.append(p, img);
        movies_div.append(Div);


    })

}

async function main() {

    //let data= await  searchMovies();
    // appendMovies(data.Search);

    let { Search } = await searchMovies();
    appendMovies(Search);

}

var timer_id;//undefined
function throttleFunction(func, delay) {

    //If setTimeout is already there, no need to do anything.


    if (timer_id) {
        return false;
    }

    timer_id = setTimeout(() => {

        func(); //calling main() function

        timer_id = undefined;

    }, delay);

}

    //a main(),2000
    //b main(),2000

