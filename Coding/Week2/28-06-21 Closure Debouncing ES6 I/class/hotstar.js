function appendMovies(movie){

}

function appendMovies(movies){
    movies_div.innerHTML=null;

    // movies.forEach(({Title})) =>{
    movies.forEach((el) =>{
        let p= document.createElement('p')
        // p.innerText=Title;
        p.innerText=el.title;
        movie_div.append(p);
    })
    }

async function main(){
//     let data = await searchMovies();
// console.log('data: ',data);

let {Search}= await searchMovies();
// console.log('search',Search);

appendMovies(Search);

}

let movieDiv= document.getElementById('movies')

function throttleFunction(func,delay){
setTimeout(()=>{
    func()
},delay);
}

