console.log("script is working");
// key:
// e8ecc7eb806a44cf84b713b3183e2685


let container= document.getElementById('container');
var apiKey="e8ecc7eb806a44cf84b713b3183e2685";

var query;
var data;
var category;

main(); 
async function main() {

     data= await getNewsData();
     showNewsData();
    showButtons(1);
}

async function getNewsData(){
container.innerHTML="";
    try{
        
    let res = await fetch(` https://newsapi.org/v2/top-headlines?category=${category}&${query}&language=en&apiKey=${apiKey}`);
   
    console.log("category",category)
    console.log("query",query)

   let data= await res.json();
    console.log('data:',data)

    // showNewsData(data);
    return data;

} catch(e){
    console.log("e: ",e);
    }

    }
    
//pagiantion



function showButtons(index) {

    let button_div = document.getElementById('button');
    button_div.innerHTML = null;

    let original_index=index;

    if(index<=4){
        index=4;

    }

for (let i = index-3;i <= index+1; i++) {
    let btn = document.createElement('button');
    
    btn.innerText = i ;
    btn.setAttribute('id', `${i}`);
    btn.onclick = showNewsData;
    
    button_div.appendChild(btn);

    
}

let btn=document.getElementById(original_index);
btn.style.backgroundColor='green';

}



    function showNewsData(){
        let id = Number(this.id);
          
            if(!id){
                id=1;
            }

          container.innerHTML=null; 

        var count=id+4;
    
        for(let i=id;i<=count;i++)
        {
            if(data.articles[i].description!=null)
            {
                let headline=document.createElement('p');
                headline.innerHTML=` <li>${data.articles[i].description} </li>`;
        
                 container.append(headline);
            }
            else{
                count++;
            }
    }
    
    showButtons(id);
    
    }


//categories

function sports(cat){
    category=cat;
window.location="sports3.html";
}

function entertainment(cat){
    category=cat;
    window.location="entertainment3.html";

}

function technology(cat){
    category=cat;
window.location="technology3.html"
}
function home(cat){
    category=cat;
    window.location="index3.html"
}

function searchRequest(){
    query=document.getElementById('searchresult').value;

searchIt();


}

async function searchIt(){
    
    data= await getSearchData();
    showNewsData();
   showButtons(1);


}


async function getSearchData(){


    container.innerHTML="";
    try{
        
    let res = await fetch(`https://newsapi.org/v2/everything?q=${query}&language=en&apiKey=${apiKey}`);

    console.log("query",query)

   let data= await res.json();
    console.log('data:',data)

    return data;

} catch(e){
    console.log("e: ",e);
    }

    }


