import React from 'react'
import { Component } from 'react'


function StatBar(stat_data){
    return (
        <div className="stat-bar">
            <div className="stat-name">
                { stat_data.stat.name }
            </div>
            <div className="stat-value">
                { stat_data.base_stat }
            </div>
        </div>
    )
} // end component


function Card(pokemon_data){
    console.log(pokemon_data)
    console.log(pokemon_data.sprites.font_default)
    return (
        <div className="card">
            <div className="card-header">
                <div className="card-header-image">
                    <img src={pokemon_data.sprites.front_default} className="card-image" />
                </div>
                <div className="card-header-title"> { pokemon_data.id } | { pokemon_data.name }</div>
            </div>
            <div className="card-body">
                {
                     pokemon_data.stats.map(stat => <StatBar {...stat} />)
                }
            </div>
        </div>
    )
} // end component

export default Card