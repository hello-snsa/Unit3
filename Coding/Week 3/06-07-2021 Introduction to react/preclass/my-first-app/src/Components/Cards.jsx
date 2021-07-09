import React from "react";

export default function  Cards({header,data}){


    return(
        <div id="mainDiv">
<div id="header">
    <h1> 
        {header}
    </h1>

</div>
<div id="lists">
    <ul>
        <li>{data[0]}</li>
        <li>{data[1]}</li>
        <li>{data[2]}</li>
        <li>{data[3]}</li>
      
    </ul>



    {/* <ul>
            {data.forEach((el) => {
              <li>{data[el]}</li>
            
            })
            }
           
    
       
      
    </ul> */}

</div>
</div>

    )
}

// export default Cards;