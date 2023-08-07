import React, {useState} from 'react'
import axios from 'axios'


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
    const fetchWithAxios=()=>{
      axios.get (`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`)
      .then(response=>{
          setPokemonList(response.data.results)
      })
      .catch (err=>{
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
        <button onClick={fetchWithAxios}> Fetch With Axios</button>

    </div>

  )
}

export default Fetch