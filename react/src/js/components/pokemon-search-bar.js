import { Component } from 'react';
import React from 'react'

function SearchBar({ whenPokemonFound, whenPokemonNotFound }){

	let bar_data = {
	}

	async function search(id){
		const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
		const pokemon = await response.json()
		return pokemon
	}

	function buscarPokemon(){
		search(bar_data.id)
			.then(data => {
				whenPokemonFound(data)
			})
			.catch(() => {
				whenPokemonNotFound(bar_data.id)
			})
			
	}

	function inputChange(){
		// Cada vez que el input cambia le asigna el valor de 
		// el imput a bar_data
		let bar = document.getElementById("bar")
		let value = bar.value
		bar_data.id = value
	}

	return (
		<div className="bar-container">
			<input type="text" className="bar" 
			placeholder="Inserte el ID de un pokemon"
			onChange={ inputChange }
			id="bar"/>
			<button className="bar-button" onClick={ buscarPokemon }>
				Buscar Pokemon
			</button>
		</div>
	)
}

export default SearchBar