
export default function Forms(){

    let preventDefault=(e)=>{
        e.preventDefault();
        
alert("hello")
    }


    return(
        <>
        <div>
        <h1>Hello World</h1>
        <form>
            <input className="inputField" placeholder="enter name"></input>
            <button onClick={(e)=>{
                preventDefault(e)
            }
            }>Submit it</button>
        </form>






        </div>
        </>
    )
}