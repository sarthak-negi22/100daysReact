import { useState } from "react";
import { useImmer } from "use-immer";

// concise logic update with useImmer

let JenshinPlayers = [
    { id : 0, name : "yelan", have:false },
    { id : 1, name : "tignhari", have:false },
    { id : 2, name : "xiao", have:false }
];

function ConcideLogic() {
    const [lucas, updateLucas] = useImmer(JenshinPlayers);
    const [taabish, updateTaabish] = useImmer(JenshinPlayers);
    const [konichivo, updateKonichivo] = useImmer(JenshinPlayers);

    function handleLucas(jenshinId, nextHave) {
        updateLucas(draft => {
            const players = draft.find(a => a.id === jenshinId);
            players.have = nextHave;
        })
    }

    function handleTaabish(jenshinId, nextHave) {
        updateTaabish(draft => {
            const players = draft.find(a => a.id === jenshinId);
            players.have = nextHave;
        })
    }

    function handleKonichivo(jenshinId, nextHave) {
        updateTaabish(draft => {
            const players = draft.find(a => a.id === jenshinId);
            players.have = nextHave;
        })
    }

    return (
        <>
            <h1>Jenshin Players</h1>
            <h2>Things that LucaS Own:</h2>
            <ItemList
                artworks = { lucas }
                onToggle = { handleLucas }
            />
            <h2>Things that Konichivo Own:</h2>
            <ItemList
                artworks = { konichivo }
                onToggle = { handleKonichivo }
            />
            <h2>Things that Taabish Own:</h2>
            <ItemList
                artworks = { taabish }
                onToggle = { handleTaabish }
            />
        </>
    );
}

// updating objects inside array
// let JenshinPlayers = [
//     { id : 0, name : "yelan", have:false },
//     { id : 1, name : "tignhari", have:false },
//     { id : 2, name : "xiao", have:false }
// ];

function UpdateObjectInArray() {

    const [lucas, setLucas] = useState(JenshinPlayers);
    const [taabish, setTaabish] = useState(JenshinPlayers);
    const [konichivo, setKonichivo] = useState(JenshinPlayers);

    function handleLucas(jenshinId, nextHave) {
        setLucas(lucas.map(player => {
            if(player.id === jenshinId) {
                return {
                    ...player, have : nextHave
                };
            } else {
                return player;
            }
        }))
    }
    function handleTaabish(jenshinId, nextHave) {
        setTaabish(taabish.map(player => {
            if(player.id === jenshinId) {
                return {
                    ...player, have : nextHave
                };
            } else {
                return player;
            }
        }))
    }
    function handleKonichivo(jenshinId, nextHave) {
        setKonichivo(konichivo.map(player => {
            if(player.id === jenshinId) {
                return {
                    ...player, have : nextHave
                };
            } else {
                return player;
            }
        }))
    }

    return (
        <>
          <h1>Jenshin Impact</h1>
          <h2>Things that LucaS Own:</h2>
          <ItemList
            artworks={lucas}
            onToggle={handleLucas} />
          <h2>Things that Taabish Own:</h2>
          <ItemList
            artworks={taabish}
            onToggle={handleTaabish} />
          <h2>Things that Konichivo Own:</h2>
          <ItemList
            artworks={konichivo}
            onToggle={handleKonichivo} />
        </>
      );
    }
    
    function ItemList({ artworks, onToggle }) {
      return (
        <ul>
          {artworks.map(artwork => (
            <li key={artwork.id}>
              <label>
                <input
                  type="checkbox"
                  checked={artwork.seen}
                  onChange={e => {
                    onToggle(
                      artwork.id,
                      e.target.checked
                    );
                  }}
                />
                {artwork.name}
              </label>
            </li>
          ))}
        </ul>
      );
    }
 

// making other changes to an array (reverse, sort)
let nextIndex = 3;
const initialPlayers = [
    { id : 0, name : "LucaS", advRank : 60 },
    { id : 1, name : "Taabish", advRank : 59 },
    { id : 2, name : "Konichivo", advRank : 53 },
];

function ReversePlayers() {
    
    const [players, setPlayers] = useState(initialPlayers);

    function handleClick() {
        const newPlayers = [...players];
        newPlayers.reverse();
        setPlayers(newPlayers);
    }

    return (
        <>
            <button onClick = { handleClick }>
                UNO Reverse
            </button>
            <ul>
                { players.map(player => (
                    <li key = { player.id }> { player.id } { player.name } { player.advRank }</li>
                ))}
            </ul>
        </>
    );  
}


// inserting into an array at a particular index
// let nextIndex = 3;
// const initialPlayers = [
//     { id : 0, name : "LucaS", advRank : 60 },
//     { id : 1, name : "Taabish", advRank : 59 },
//     { id : 2, name : "Konichivo", advRank : 53 },
// ];

function GenshinPlayers() {

    const [name, setName] = useState(' ');
    const [players, setPlayers] = useState(
        initialPlayers
    );

    function handleClick() {
        const insertAt = 1;
        const nextPlayers = [
            ...players.slice(0,insertAt),

            { id : nextId++, name : name },

            ...players.slice(insertAt)
        ];
        setPlayers(nextPlayers);
        setName(' ');
    }
    
    return (
        <>
            <h1>Genshin Impact Players Details</h1>
            <input 
                value = { name }
                onChange = {e => setName(e.target.value)}
            />

            <button onClick = { handleClick }>
                Add
            </button>

            <ul>
                { players.map(player => (
                    <li key = { player.id }>{ player.name } { player.advRank } </li>
                )) }
            </ul>
        </>
    );
}

// replacing an item in an array
let initialAR = [
    0, 0, 0
];

function CounterAR(index) {
    const [adventureExp, setAdventureExp] = useState(initialAR);

    function handleClick(index) {
        const nextAR = adventureExp.map((a,i) => {
            if(i === index) {
                return a + 1;
            }
            else {
                return a;
            }
        });
        setAdventureExp(nextAR);
    }

    return (
        <>
        <ul>
            { adventureExp.map((adv,i) => (
                <li key = {i}>
                    { adv }
                    <button onClick = {() => {
                        handleClick(i);
                    }}>
                        +1
                    </button>
                </li>
            ))}
            </ul>
        </>
    )
}


let initialShapes = [
    { id : 0, type : 'circle', x : 50, y : 100 },
    { id : 1, type : 'square', x : 150, y : 100 },
    { id : 2, type : 'circle', x : 250, y : 100 },
]

// transforming an array
function TransformArray() {
    
     const [shapes, setShapes] = useState(initialShapes);

     function handleDownClick() {
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

     function handleUpClick() {
        const changeShapes = shapes.map(shape => {
            if(shape.type == 'square') {
                return shape;
            }
            else {
                return {
                    ...shape,
                    y : shape.y - 50,
                }
            }
        })
        setShapes(changeShapes);
     }

     function handleSquare() {
        const changeShapes = shapes.map(shape=> {
            if(shape.type == 'circle') {
                return shape;
            }
            else {
                return {
                    ...shape,
                    x : shape.x + 50,
                }
            }
        })
        setShapes(changeShapes);
     }
    
    return (
        <>
           <button onClick={ handleDownClick }>
        Move circles down!
      </button>
      <button onClick={ handleUpClick }>
        Move Circles Up!
      </button>
      <button onClick={ handleSquare }>
        Move Square
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

            {/* <TransformArray/> */}

            {/* <CounterAR/> */}

            {/* <GenshinPlayers/> */}

            {/* <ReversePlayers/> */}

            {/* <UpdateObjectInArray/> */}

            <ConcideLogic/>
        </>
    );
}