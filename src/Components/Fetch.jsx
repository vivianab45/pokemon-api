import React, {useState} from 'react'


const Fetch = () => {
    const[pokemonList, setPokemonList]= useState([])

    const fetchWithThen =()=>{
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`)
        .then(response =>{
            return response.json();
        })
        .then(responseJson =>{
            setPokemonList(responseJson.results)
        })
        .catch(err=>{
            console.log(err)
        })
    }
  return (
    <div>
      <h1>Fetch Pokemon</h1>

        <ul>
        {pokemonList.map((eachOne,idx)=>
        <li key={idx}>{eachOne.name}</li>)
        }
        </ul>
        <button onClick={fetchWithThen}> Fetch Pokemon</button>  

    </div>

  )
}

export default Fetch