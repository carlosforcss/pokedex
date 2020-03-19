import React from 'react'
import { useState } from 'react'
import Card from "./pokemon-card"

function Grid({ list }){
    const [loaderList, setLoaderList] = useState(list)
    return (
        <div className="card-grid">
            {
                loaderList.map((item) => <Card {...item} key={item.id} />)
            }
        </div>
    )
}

export default Grid