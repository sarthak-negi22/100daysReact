import { useState } from 'react';

function Square() {
    
    const [value, setValue] = useState(' ');

    function handleClick() {
        // console.log('You clicked the square');
        setValue('X');
    }
    
    return (
        <>
            <button 
            className = "square"
            onClick = { handleClick }    
            >
                { value }
            </button>
        </>
    );  
}

function Board() {
    return (
        <>
             {/* <button className="square">X</button> */}
             <div className='board-row'>
                <Square />
                <Square />
                <Square />
             </div>
             <div className='board-row'>
                <Square />
                <Square />
                <Square />
             </div>
             <div className='board-row'>
                <Square />
                <Square />
                <Square />
             </div>
        </>
    );
}

export default function TicTacToe() {
    return (
        <>
            <Board/>
        </>
    );
}