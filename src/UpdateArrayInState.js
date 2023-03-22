import { useState } from "react";

let nextId = 0;

function AddArray() {
    const [name, setName] = useState(' ');
    const [travellers, setTravellers] = useState([]);

    function handleName(e) {
        setName(e.target.value);
        
    }

    function handleTravellers() {

        // for putting the old items at the front
        // setTravellers([
        //     ...travellers,
        //     { id : nextId++ , name : name }
        // ]);

        // for putting the old items at the end
        setTravellers([
            { id: nextId++ , name : name },
            ...travellers
        ])
    }

    return (
        <>
            <h2>Genshin Impact Players</h2>
            <input 
                value = { name }
                onChange = { handleName }
            />
            <button onClick = { handleTravellers }>
                Add
            </button>

            <ul>
                { travellers.map(traveller => (
                    <li key = { traveller.id }> { traveller.name }</li>
                )) }
            </ul>
        </>
    );
}

export default function UpdateObjInState() {
    return (
        <>
            {/* <h2>Hello world</h2> */}

            <AddArray/>
        </>
    );
}