import React from "react";
import {data} from '../restAPI.json'

const Menu = () => {
    return (
        <section className="menu" id="menu">
            <div className="container">
            <div className="heading_section">
                <h1 className="heading">BEST DISHES</h1>
                <p>The best cooks in town, ready to serve you the FRESHEST, TASTIEST, food you've ever had!!</p>
            </div>
            <div className="dishes_container">
                {data[0].dishes.map((element) => {
                        return(
                            <div className="card" key={element.id}>
                                <img src={element.image} alt={element.title} />
                                <h3>{element.title}</h3>
                                <button>{element.catergory}</button>
                                </div>
                        )
                    })
                }

            </div>
            </div>
        </section>
    )
}

export default Menu