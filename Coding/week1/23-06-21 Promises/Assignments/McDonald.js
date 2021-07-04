console.log("script McDonald.js is working");


var biryani;


var food=document.getElementById("foodDisplay");


async function orderFood(){
   
    food.innerHTML=null;

    biryani=document.getElementById('biryani').checked;
    // console.log("biryani",biryani)

    burger= document.getElementById('burger').checked;
    curry= document.getElementById('curry').checked;
    coldDrink= document.getElementById('coldDrink').checked;

 let container=document.getElementById('container');
//  container.innerHTML=`<button id="back">Back</button>`;
 container.innerHTML="Your Food being prepaired";

 setTimeout(

 ()=>{

   var myPromise= new Promise((resolve,reject)=>{

    container.innerHTML="Your Food is ready";
       document.getElementById('orderNo').innerHTML="Order number: M101B12";
    
    
    if (biryani){
        let img= document.createElement('img');
    img.src="biryani.jpeg";
    food.append(img);
    }
    if(curry)
    {let img= document.createElement('img');
        img.src='curry.jpeg';
        food.append(img);
    }
    if(burger)
    {let img= document.createElement('img');
        img.src='burger.jpeg';
        food.append(img);
    }
    if(coldDrink)
    {let img= document.createElement('img');
        img.src='coldDrink.jpeg';
        food.append(img);
    }
    

       resolve();
   


   })
},5000);

   var data= await myPromise;
   console.log("res ",data)

}
