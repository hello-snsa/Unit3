import './App.css';
// import List from './Components/List';
import Cards from './Components/Cards';
import Cards1 from './Components/Cards1';
import Cards2 from './Components/Cards2';
import Counter from "./Components/Counter";

var header= "Mobile Operating System";
var data=['Android','blackberry','iphone','Windows Phone'] ;

var header2= "Mobile Manufacturers";
var data2=['Samsung','HTC','Micromax','Apple'] ;


    function App(){
      return(
      

        <div>
            <Cards header={header} data={data} /> 
            <Cards header={header2} data={data2} /> 

            {/* <Cards1 />
            <Cards2 /> */}


            <div>
              <h2>counter</h2>
              <div className="App">
                <Counter />
              </div>
            </div>
    
          </div>
      
  );
}

export default App;
  