import { useState } from "react";

// replacing state after updating it
function ReplaceStateAfterUpdate() {
    const [increment, setIncrement] = useState(0);

    function handleIncrement() {
        setIncrement(increment + 5)
        setIncrement(increment => increment + 1)
        setIncrement(69);
    }

    return (
        <>
            <h2>Counter: { increment } </h2>
            <button onClick={ handleIncrement }>
                +5
            </button>
        </>
    );
}

// updating the state after replacing it
function UpdateStateAfterReplace() {
    const [increment, setIncrement] = useState(0);

    function handleIncrement() {
        setIncrement(increment + 3)
        setIncrement(increment => increment + 1)
    }

    return (
        <>
            <h2>Counter { increment }</h2>
            <button onClick = { handleIncrement }>
                +3
            </button>
        </>
    );
}

function Counter() {
    const [increment, setIncrement] = useState(0);

    function handleIncrement() {
        // setIncrement(increment => increment + 3);            //updater function
        setIncrement(increment + 1);
    }

    return (
        <>
            <h2>Counter = { increment }</h2>
            <button onClick = { handleIncrement }>
                +3
            </button>
        </>
    );
}

export default function StateUpdates() {
    return (
        <>
            {/* <Counter/> */}

            {/* <UpdateStateAfterReplace/> */}

            <ReplaceStateAfterUpdate/>
        </> 
    )
}