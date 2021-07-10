
let videos_div= document.getElementById('videos');

async function searchVideos(){

let query= document.getElementById('query').value;
try{
  var res= await  fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${query}&key=AIzaSyBgdzLevlaKDkHHWBYt4ibpu8Udc68B-M0&maxResults=20`)

  let {items}= await res.json();
items=items.filter(({id:{videoId}})=>{return videoId!=undefined})
console.log(items)
appendVideos(items)

}
catch(e){
    console.log('e:',e)
}


}
function appendVideos(videos){

    videos_div.innerHTML=null;

    videos.forEach(({id:{videoId}})=>{

   

  let div=document.createElement('div');

 div.innerHTML=`<iframe  src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" clipboard-write; ></iframe>`
    // div.append(searchResult);
    videos_div.append(div);
  })

}
/* <iframe width="853" height="480" src="https://www.youtube.com/embed/tOczmJSLvug" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */



function enter(ev){
  if(ev.keyCode==13)
  {
    searchVideos();
  }
}
///initial value


async function initialVideos(){

    try{

  let pVideo="most popular";
      var res= await  fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${pVideo}&key=AIzaSyBgdzLevlaKDkHHWBYt4ibpu8Udc68B-M0&maxResults=20`)

      // var res= await  fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=IN&key=AIzaSyBgdzLevlaKDkHHWBYt4ibpu8Udc68B-M0&maxResults=20')

      // var res= await  fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=AIzaSyC28lWQiG6_Ow_FcKB7aNyUWgzfnHrkfIY&maxResults=20')
      
      
      



try{

      let {items}= await res.json();
    items=items.filter(({id:{videoId}})=>{return (videoId!=undefined && videoId!=" HL3aOdG4cFg" &&   videoId!="kRyfRx1uymk") })
   
    console.log("my data ",items)
    appendVideos(items)
    
    
  }catch(e){
    console.log("error",e);
  }
}
    catch(e){
        console.log('e:',e)
    }

}
    

function homeVideos(videos){

    videos_div.innerHTML=null;

    videos.forEach(({id:{videoId}})=>{

   

  let div=document.createElement('div');

 div.innerHTML=`<iframe  src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" clipboard-write; ></iframe>`
    // div.append(searchResult);
    videos_div.append(div);
  })

}

initialVideos();
// homeVideos();
