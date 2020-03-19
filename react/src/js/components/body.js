
import React from 'react'
import { Component } from 'react';
import { useState } from 'react'
//Components
import SearchBar from "./pokemon-search-bar"
import Card from "./pokemon-card"

/*
class Body extends Component{

	render(){


		let objeto = {
			whenPokemonFound: function(pokemon){
                pokemons.list.push(pokemon)
                alert(pokemons.list)
                this.render()
			},
			whenPokemonNotFound: function(valor_ingresado){
				alert(valor_ingresado + " no es un ID validio.")
			}, 
        }
        
		return (
			<div className="body">
				<SearchBar {...objeto} />
                <Card />
            </div>
		)
	}
}
*/

let pokemons = {
    list: []
}

function Body(){
    
    const [loaderList, setLoaderList] = useState([])
    
    let objeto = {
        whenPokemonFound: function(pokemon){
            pokemons.list.push(pokemon)
            setLoaderList(pokemons.list)
        },
        whenPokemonNotFound: function(valor_ingresado){
            alert(valor_ingresado + " no es un ID validio.")
        }, 
    }
    
    return (
        <div className="body">
            <SearchBar {...objeto} />
            {
                pokemons.list.map((item) => <Card {...item} key={item.id} />)
            }
        </div>
    )
}

export default Body