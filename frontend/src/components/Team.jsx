import React from "react";
import { data } from "../restAPI.json"

const Team = () => {
    return (
        <section className="team" id="team">
            <div className="container">
                <div className="heading_section">
                    <h1 className="heading">LET'S HEAR IT FOR THE TEAM!</h1>
                    <p>Being part of a great team means knowing that every member brings 
                        something unique to the table, and together, we can achieve more 
                        than we ever could alone. It's through trust, open communication, 
                        and shared goals that we push each other to grow and succeed.</p>
            </div>
            <div className="team_container">
                {
                    data[0].team.map((element) => {
                        return (
                            <div className="card" key={element.id}>
                                <img src={element.image} alt={element.name} />
                                <h3>{element.name}</h3>
                                <p>{element.designation}</p>
                                </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
    
};

export default Team