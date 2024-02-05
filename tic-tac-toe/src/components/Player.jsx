import { useState } from "react";

export default function Player({initialName, symbol}){
    const [playerName, setPlayerName] = useState(initialName);
    const [ isEdition, setIsEditing ] = useState(false);

    let editablePlayerName = <span className="player-name">{playerName}</span>

    function handleClickEditButton(){
        setIsEditing(editing => !editing);

    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    if(isEdition) {
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange}/>
    }
    return(
        <li>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleClickEditButton}>{isEdition ? 'Save' : 'Edit'}</button>
        </li>
    );
}