//General
import "../css/home.css"
import { render } from 'react-dom'
import { Component } from 'react';
import React from 'react'
import Body from "./components/body"

class App extends Component{

	render(){
		return (
			<Body />
		)
	}
}


render(<App />, document.getElementById('container'))
