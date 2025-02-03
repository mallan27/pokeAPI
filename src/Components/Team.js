import React, { useEffect } from "react";
import { usePokemon } from "../Context/PokemonContext";
import classes from './style.module.css'; 

function Team () {
    const {team, setPokemon}=usePokemon(); 

    return(
    <div className={classes.teamlist}>
        <h2>Poketeam</h2>
    {team.map((poke)=> 
    <div className={classes.pokemembers} onClick={()=>setPokemon(poke)}>
    <img src={poke.img}/>
    <div className={classes.pokememberinfo}>
    <div><h5>{poke.name}</h5></div>
    <div> <p>{poke.id}</p></div>
    </div>
    </div>)}
    </div>
    )

}

export default Team;  