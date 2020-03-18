//General
import "../css/home.css"
import { render } from 'react-dom'
import React from 'react'
import { Component } from 'react';
//Components
import SearchBar from "./components/pokemon-search-bar"


class App extends Component{
	render(){

		function funcion(){
		}

		let objeto = {
			ejecutar: function(){alert('ads')},
		}

		return (
			<div>
				<SearchBar {...objeto} />
			</div>
		)
	}
}


render(<App />, document.getElementById('container'))
