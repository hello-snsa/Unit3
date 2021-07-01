console.log("script is working");
// key:
// e8ecc7eb806a44cf84b713b3183e2685


// let products_data = [];
// var category="";

// let category= getElementById('category')
let container= document.getElementById('container');
var apiKey="e8ecc7eb806a44cf84b713b3183e2685";

async function getNewsData(){

    try{
    let res = await fetch(` https://newsapi.org/v2/top-headlines?country=in&from=2021-06-25&sortBy=popularity&category=${category}&apiKey=e8ecc7eb806a44cf84b713b3183e2685`);
    console.log("category",category)

   let data= await res.json();
    console.log('data:',data)

    showNewsData(data);
} catch(e){
    console.log("e: ",e);
    }

    }
    getNewsData();



function showNewsData(d){
    for(let i=0;i<10;i++)
    {
    if(d.articles[i].description!=null)
    {
    let headline=document.createElement('p');
    headline.innerHTML=` <li>${d.articles[i].description} </li>`;

    container.append(headline);
    }
}

}



function sports(cat){
    // category=cat;
window.location="sports.html";
}

function entertainment(cat){
    category=cat;
    window.location="entertainment.html";

}

function technology(cat){
    category=cat;
window.location="technology.html"
}
function home(cat){
    category=cat;
    window.location="index2.html"
}
