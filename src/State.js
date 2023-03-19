import { useState } from "react";
import { sculptureList } from "./data";

function MultipleStates() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    let next = index < sculptureList.length - 1;
    let prev = index > 0;

    function handleNextClick() {

        if(next)
        setIndex(index + 1);
    }

    function handlePrevClick() {
        
        if(prev)
        setIndex(index - 1);
    }

    function handleShowMore() {
        setShowMore(!showMore);
    }

    let sc = sculptureList[index];

    return (
        <>
            <button onClick = { handleNextClick } disabled = { !next }>
                Next
            </button>

            <button onClick = { handlePrevClick } disabled = { !prev }>
                Previous
            </button>

            <h2>{ sc.name } by { sc.artist }</h2>
            <h3>{ index + 1 } of { sculptureList.length }</h3>

            <button onClick = { handleShowMore }>
                { showMore ? 'Hide' : 'Show'} details
                
            </button>
            { showMore && <p> { sc.description } </p> }
            { showMore && <img
                src = { sc.url }
                alt = { sc.alt }
            /> }
        </>
    )
}

function ShowSculptures() {

    const [index, setIndex] = useState(0);

    function handleClick() {
        setIndex(index + 1);
    }

    function handleReverseKey() {
        setIndex(index - 1);
    }

    let sculpture = sculptureList[index];

    return (
        <>
            <button onClick={ handleClick }>
                Next
            </button>

            <button onClick = { handleReverseKey }>
                Previous
            </button>

            <h2>{ sculpture.name } by { sculpture.artist }</h2>
            <h3>{ index + 1} of { sculptureList.length } </h3>
            
            <img
                src = { sculpture.url }
                alt = { sculpture.alt }

            />
            <p>
                { sculpture.description }
            </p>
        </>
    )
}

export default function State() {
    return (
        <>
            {/* <div>
                Hello World
            </div> */}

            {/* <ShowSculptures/> */}

            <MultipleStates/>

            <br/>

            <MultipleStates/>       
            {/* state is isolated and local to each component */}
        </>
    )
}