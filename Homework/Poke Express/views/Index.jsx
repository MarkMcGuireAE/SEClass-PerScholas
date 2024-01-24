import React from 'react'

const myStyle= {
    color: "#ffffff",
    backgroundColor: "#000000"
};


const Index = ({pokemon}) => {
  return (
    <div style={myStyle}>
        <h1>See all the Pokemon</h1>
        <ul>
            {pokemon.map((pokemon, index) =>{
                let Name = pokemon.name[0].toUpperCase() + pokemon.name.substring(1);
                return(
                    <li key={index}><a href={`/pokemon/${index}`}>{Name}</a></li>
                )
            })}
        </ul>

    </div>
  )
}

export default Index