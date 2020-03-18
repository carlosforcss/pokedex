import { Component } from 'react';
import React from 'react'

function SearchBar({ ejecutar }){
	return (
		<input type="text" onClick={ejecutar} />
	)
}

export default SearchBar