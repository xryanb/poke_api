import React, {useState} from 'react';
import './App.css';

function App() {
const [pokes,setPokes]=useState([]);

const fetchPoke =() =>{
  fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
  .then(response => {
    return response.json();
}).then(someResponse => {
    // console.log(someResponse);
    setPokes(someResponse.results);
    console.log(someResponse)
    
}).catch(err=>{
    console.log(err);
})
}

  return (
    <div className="App">
     <button onClick={fetchPoke}>Fetch Pokemon</button>
      {/* {JSON.stringify(pokes)} */}
     
     {pokes.map( (p,idx)=> {
        return (
          
          <li key={idx}>{p.name}</li>
        
        )
      })} 
      
  
     
    </div>
  );
}

export default App;
