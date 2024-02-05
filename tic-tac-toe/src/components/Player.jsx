import { useState } from "react";

export default function Player({name, symbol}){
    const [ isEdition, setIsEditing ] = useState(false);

    let playerName = <span className="player-name">{name}</span>

    function handleClickEditButton(){
        setIsEditing(!isEdition);
    }

    if(isEdition) {
        playerName = <input type="text" required value={name} />
    }
    return(
        <li>
            <span className="player">
                {playerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleClickEditButton}>{isEdition ? 'Save' : 'Edit'}</button>
        </li>
    );
}