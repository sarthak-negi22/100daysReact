import { useState } from "react";

//state is tied in the position of the UI tree
function StateInUiTree() {
    
    const [showB, setShowB] = useState(true)

    function handleChecked(e) {
        setShowB(e.target.checked)
    }

    return (
        <>
            <Counter/>
            { showB && <Counter/> }
            <label>
                <input 
                    type = "checkbox"
                    checked = { showB }
                    onChange = { handleChecked }
                />
                CLick to show 2nd counter
            </label>
        </>
    );

}

function Counter() {
        
    const [score, setScore] = useState(0);
    const [hover, setHover] = useState(true);

    let className = "counter";
    if(hover) {
        className += "hover";
    }

    function handleClick() {
        setScore(score + 1);
    }

    return(
        <>
            <div
                className = { className }
                onPointerEnter = { () => setHover(true)}
                onPointerLeave = { () => setHover(false)}
            >
                <h1>{ score }</h1>
                <button onClick = { handleClick }>
                    Add one
                </button>
            </div>
        </>
    );  
}

export default function PreserveAndResetState() {
    return (
        <>
            {/* <h2>Hello world</h2> */}

            <StateInUiTree/>
        </>
    );
}