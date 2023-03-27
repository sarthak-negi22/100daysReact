import { useState } from "react";


// replacing an item in an array


let initialShapes = [
    { id : 0, type : 'circle', x : 50, y : 100 },
    { id : 1, type : 'square', x : 150, y : 100 },
    { id : 2, type : 'circle', x : 250, y : 100 },
]

// transforming an array
function TransformArray() {
    
     const [shapes, setShapes] = useState(initialShapes);

     function handleClick() {
        const changeShapes = shapes.map(shape => {
            if (shape.type === 'square') {
                // console.log(shape);
            return shape;
            }
            else {
                return {
                    ...shape, 
                    y : shape.y + 50,
                };
            }
        })
        setShapes(changeShapes);
     }
    
    return (
        <>
           <button onClick={handleClick}>
        Move circles down!
      </button>
      {shapes.map(shape => (
        <div
          key={shape.id}
          style={{
          background: 'purple',
          position: 'absolute',
          left: shape.x,
          top: shape.y,
          borderRadius:
            shape.type === 'circle'
              ? '50%' : '',
          width: 20,
          height: 20,
        }} />
      ))}
        </>
    );
}


let genshinPlayers = [
    { id : 0, name: 'Yoimiya' },
    { id : 1, name: 'Nilou' },
    { id : 2, name: 'Yae' },
]

// removing from an array
function RemoveFromArray() {
    const [players, setPlayers] = useState(genshinPlayers);

    return (
        <>
            <h2>Genshin Impact Chars</h2>
            <ul>
                { players.map(player => (
                    <li key = { player.id }>
                        { player.name } {' '}
                        <button onClick= { () => {
                            setPlayers(
                                players.filter(p => 
                                    p.id != player.id)
                            )
                        } } >
                            Delete
                        </button>
                    </li>
                )) }
            </ul>
        </>
    );
}


let nextId = 0;

function AddArray() {
    const [name, setName] = useState(' ');
    const [travellers, setTravellers] = useState([]);

    function handleName(e) {
        setName(e.target.value);
        
    }

    function handleTravellers() {

        // for putting the old items at the front
        setTravellers([
            ...travellers,
            { id : nextId++ , name : name }
        ]);

        // for putting the old items at the end
        // setTravellers([
        //     { id: nextId++ , name : name },
        //     ...travellers
        // ])
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

            {/* <AddArray/> */}

            {/* <RemoveFromArray/> */}

            <TransformArray/>
        </>
    );
}