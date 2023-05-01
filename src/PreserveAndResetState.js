import { useState } from "react";

// when you render a different component at the same position, the state of entire sub tree gets reset
function NewFancyStyle() {
    
    const [isFancy, setIsFancy] = useState(false);

    function handleChange(e) {
        setIsFancy(e.target.checked);
    }
    
    return (
        <>
            { isFancy ? (
                <div>
                <Counter
                    isFancy = { true } 
                />
                </div>
            ) : (
                <section>
                <Counter
                    isFancy = { false }
                />
                </section>
            )}
            <label>
                <input
                    type = "checkbox"
                    checked = { isFancy }
                    onChange = { handleChange }
                />
            </label>
        </>
    );  
}

// different component at the same position resets state
function TakeABreak() {
    
    const [isPaused, setIsPaused] = useState(false);

    function handleChange(e) {
        setIsPaused(e.target.checked);
    }
    
    return (
        <>
            { isPaused ? (
                <p>See you later!</p>
            ) : (
                <Counter/>
            )}
            <label >
                <input
                    type = "checkbox"
                    checked = { isPaused }
                    onChange = { handleChange }
                />
                Take a break!
            </label>
        </>  
    );
}
// same component at the same position preserves state
function FancyStyleComponent() {
    
    const [isFancy, setIsFancy] = useState(false);

    function handleChange(e) {
        setIsFancy(e.target.checked);
    }

    return (
        <>
            { isFancy ? (
                <Counter
                    isFancy = { true }
                />
            ) : (
                <Counter
                    isFancy = { false }
                />
            )}
            <label >
                <input
                    type = "checkbox"
                    checked = { isFancy }
                    onChange = { handleChange }
                />
                Use fancy styling
            </label>
        </>
    );
}

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

function Counter({ isFancy }) {
        
    const [score, setScore] = useState(0);
    const [hover, setHover] = useState(false);

    let className = "counter";
    if(hover) {
        className += "hover";
    }

    if(isFancy) {
        className += "fancy";
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

            {/* <StateInUiTree/> */}

            {/* <FancyStyleComponent/> */}

            <TakeABreak/>
        </>
    );
}