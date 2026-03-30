import { useState } from "react";

export default function Ludoboard(){
    let [moves,setMOves]=useState({blue:0,red:0,green:0,yellow:0});
    let updateblue=()=>{
        moves.blue+=1;
        
        setMOves({...moves});
    }

    let updateyellow=()=>{
        moves.yellow+=1;
        
        setMOves({...moves});
    }

    let updatered=()=>{
        moves.red+=1;
        
        setMOves({...moves});
    }

    let updategreen=()=>{
        moves.green+=1;
        
        setMOves({...moves});
    }

    return(
        <div>
            <p>Game Begins!!</p>
            <div className="boar">
                <p>Blue Moves={moves.blue}</p>
                <button style={{backgroundColor:"blue"}} onClick={updateblue}>+1</button>
                 <p>Yellow Moves={moves.yellow}</p>
                <button style={{backgroundColor:"yellow",color:"black"}} onClick={updateyellow}>+1</button>
                 <p>Red Moves={moves.red}</p>
                <button style={{backgroundColor:"red"}} onClick={updatered}>+1</button>
                 <p>Green Moves={moves.green}</p>
                <button style={{backgroundColor:"green"}} onClick={updategreen}>+1</button>
            </div>
        </div>
    );
}