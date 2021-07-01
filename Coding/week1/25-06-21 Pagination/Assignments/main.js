console.log("script is working");
// key:
// e8ecc7eb806a44cf84b713b3183e2685


// let products_data = [];
let container= document.getElementById('container');
var apiKey="e8ecc7eb806a44cf84b713b3183e2685";

async function getNewsData(){

    try{
    let res = await fetch(` https://newsapi.org/v2/top-headlines?country=in&apiKey=e8ecc7eb806a44cf84b713b3183e2685`);

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
    let headline=document.createElement('p');
    headline.innerHTML=` <li>${d.articles[i].description} </li>`;


    container.append(headline);
    }

}
