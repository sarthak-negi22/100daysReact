import { useState } from "react";
import { useImmer } from 'use-immer';

let nextId = 0;

let initialArs =  [
    0, 0, 0
];

function Testing() {

    const [number, setNumber] = useState(0);

    function handleClick() {
        setNumber(number + 1);
    }

    return (
        <div>
            <button onClick = {() => handleClick }>
                +1
            </button>
            {' '}
            <h2>{ number }</h2>
        </div>
    );
}


function UpdatingArrayInState() {

    // adding to an array

    // const [name, setName] = useState('');
    // const [players, setPlayers] = useState([]);

    // function handleInput(e) {
    //     setName(e.target.value);
    // }

    // function handleClick() {
    //     setPlayers([
    //         ...players,
    //         {
    //             id : nextId ++,
    //             name : name
    //         }
    //     ]);

    //     // for putting the item at the beginning

    //     // setPlayers([
    //     //     {
    //     //         id : nextId ++,
    //     //         name : name
    //     //     } , 
    //     //     ...players
    //     // ]);
    // }

    // return (
    //     <div>
    //         <h2>Genshin Impact Players</h2>
    //         <input
    //             value = { name }
    //             onChange = {e => handleInput(e) }
    //         />
    //         <button
    //             onClick = { handleClick }
    //         >
    //             Add
    //         </button>
    //         <ul>
    //             { players.map(player => (
    //                 <li key = { player.id }>{ player.name }</li>
    //             ))}
    //         </ul>
    //     </div>
    // );

    // removing an item from an array

    // const [players, setPlayers] = useState([]);
    // const [name, setName] = useState('');

    // function handleChange(e) {
    //     setName(e.target.value)
    // }

    // function handleClick() {
    //     setPlayers([
    //         ...players,
    //         {
    //             id : nextId ++,
    //             name : name
    //         }
    //     ]);
    // }

    // return (
    //     <div>
    //         <h2>Honkai Impact Players</h2>
    //         <input
    //             value = { name }
    //             onChange = {e => handleChange(e) }
    //         />
    //         <button 
    //             onClick = { handleClick }
    //         >
    //             Add
    //         </button>
    //         <ul>
    //             { players.map(player => (
    //                 <>
    //                 <li key = { player.id }>{ player.name }</li>
    //                 <button 
    //                     onClick = { () => {
    //                         setPlayers(
    //                             players.filter((p => p.id !== player.id))
    //                         )
    //                     } }
    //                 >
    //                     Delete
    //                 </button>
    //                 </>
    //             ))}
    //         </ul>
    //     </div>
    // );

    // transforming an array

    // let initialStates = [
    //     { id: 0, type: 'circle', x: 50, y: 100 },
    //     { id: 1, type: 'square', x: 150, y: 100 },
    //     { id: 2, type: 'circle', x: 250, y: 100 },
    // ]

    // const [shapes, setShapes] = useState(initialStates);

    // function handleCircle() {
    //     const newShapes = shapes.map(shape => {
    //         if(shape.type === 'square') {
    //             return shape;
    //         } else {
    //             return {
    //                 ...shape,
    //                 y : shape.y + 50
    //             }
    //         }
    //     });
    //     setShapes(newShapes);
    // }

    // function handleSquare() {
    //     const newShapes = shapes.map(shape => {
    //         if(shape.type === 'circle') {
    //             return shape;
    //         } else {
    //             return {
    //                 ...shape,
    //                 y : shape.y + 50
    //             }
    //         }
    //     });
    //     setShapes(newShapes);
    // }

    // return (
    //     <div>
    //         <button 
    //             onClick = { handleCircle }
    //         >
    //             Move the circle!
    //         </button>
    //         { ' '}
    //         <button
    //             onClick = { handleSquare }
    //         >
    //             Move the square!
    //         </button>
    //         {shapes.map(shape => (
    //     <div
    //       key={shape.id}
    //       style={{
    //       background: 'purple',
    //       position: 'absolute',
    //       left: shape.x,
    //       top: shape.y,
    //       borderRadius:
    //         shape.type === 'circle'
    //           ? '50%' : '',
    //       width: 20,
    //       height: 20,
    //     }} />
    //   ))}
    //     </div>
    // );

    // replacing items in an array


    // const [levels, setLevels] = useState(initialArs);

    // function handleClick(index) {
    //     const nextLevels = levels.map((l,i) => {
    //         if(i === index) {
    //             return l + 1
    //         } else {
    //             return l;
    //         }
    //     });
    //     setLevels(nextLevels);
    // }
    
    // return (
    //     <div>
    //         <ul>
    //             { levels.map((level, i) => (
    //                 <li key = { i }>
    //                     { level }
    //                     <button 
    //                         onClick = {() => handleClick(i) }
    //                     >
    //                         +1
    //                     </button>
    //                 </li>
    //             ))}
    //         </ul>
    //     </div>
    // );  

    // insertion at a specific index of an array

    const [name, setName] = useState('');
    const [players, setPlayers] = useState([]);

    function handleClick() {
        const insertAt = 2;
        const nextPlayers = [
            ...players.slice(0,insertAt),
            { id : nextId, name : name },
            ...players.slice(insertAt)
        ];
        setPlayers(nextPlayers);
        setName('');
    }

    return (
        <div>
            <h2>Genshin Impact Players</h2>
            <input
                value = { name }
                onChange = { e => setName(e.target.value) }
            />
            <button onClick = { handleClick }>
                Add
            </button>
            <ul>
                <li> 
                    { players.map(player => (
                        <li key = { player.id }>{ player.name }</li>
                    )) }
                </li>
            </ul>
        </div>
    );
}

function UpdatingObjectInState() {

    // when you want to update an object, you need to create a new copy and then set the state to use that copy
    // we should treat objects as they are immutable, thought they are technically mutable in react

    // const [position, setPosition] = useState({
    //     x : 0,
    //     y : 0
    // });

    // function handlePointer(e) {
    //     setPosition({
    //         x : e.clientX,
    //         y : e.clientY
    //     });
    // }

    // return (
    //     <div
    //         onPointerMove = {e => {
    //             handlePointer(e)
    //         }}
    //         style = {{
    //             position : 'relative',
    //             width : '100vw',
    //             height : '100vh',
    //         }}>

    //     <div
    //     style={{
    //         position: 'absolute',
    //         backgroundColor: 'red',
    //         borderRadius: '50%',
    //         transform: `translate(${position.x}px, ${position.y}px)`,
    //         left: -10,
    //         top: -10,
    //         width: 20,
    //         height: 20,
    //     }}/>
    //     </div>
    // );

    // local mutation is fine, that is chaning the object that you have just freshly created since no other part of the code references to it yet.

    // copying objects with the spread syntax

    // const [person, setPerson] = useState({
    //     firstName : 'Sarthak',
    //     lastName : 'Negi',
    //     email : 'sarthak2221@gmail.com'
    // });

    // function handleFirstName(e) {
    //     setPerson({
    //         ...person,
    //         firstName : e.target.value
    //     });
    // }

    // function handleLastName(e) {
    //     setPerson({
    //         ...person,
    //         lastName : e.target.value
    //     })
    // }

    // function handleEmail(e) {
    //     setPerson( {
    //         ...person,
    //         email : e.target.value
    //     })
    // }

    // // for using a single event handler, use [ ] to specify a property with dynamic name
    // function handleChange(e) {
    //     setPerson({
    //         ...person,
    //         [e.target.name] : e.target.value
    //     });
    // }

    // return (
    //     <>
    //         <label>
    //             First Name:
    //         </label>
    //         <input
    //             onChange = { handleFirstName }
    //             value = { person.firstName }
    //         />
    //         <label>
    //             Last Name:
    //         </label>
    //         <input
    //             onChange = { handleLastName }
    //             value = { person.lastName }
    //         />
    //         <label>
    //             Email:
    //         </label>
    //         <input
    //             onChange = { handleEmail }
    //             value = { person.email }
    //         />
    //         <h2>{ person.firstName } {' '} { person.lastName } { ' ' } { person.email }</h2>
    //     </>
    // )

    // updating a nested object

    // const [player, setPlayer] = useState({
    //     name : 'LucaS',
    //     server : 'Asia',
    //     uid : 89776789,
    //     level : 60,
    //     details : {
    //         chars : 10,
    //         weapons : 3,
    //     }
    // });
    
    // function handleName(e) {
    //     setPlayer({
    //         ...player,
    //         name : e.target.value
    //     });
    // }

    // function handleServer(e) {
    //     setPlayer({
    //         ...player,
    //         server : e.target.value
    //     });
    // }

    // function handleUid(e) {
    //     setPlayer({
    //         ...player,
    //         uid : e.target.value
    //     });
    // }

    // function handleLevel(e) {
    //     setPlayer({
    //         ...player,
    //         level : e.target.value
    //     });
    // }

    // function handleChars(e) {
    //     setPlayer({
    //         ...player,
    //         details : {
    //             ...player.details,
    //             chars : e.target.value
    //         }
    //     });
    // }

    // function handleWeapons(e) {
    //     setPlayer({
    //         ...player,
    //         details : {
    //             ...player.details,
    //             weapons : e.target.value
    //         }
    //     });
    // }

    // return (
    //     <div>
    //         <label>
    //             Name : 
    //         </label>
    //         <input
    //             value = { player.name }
    //             onChange = { handleName }
    //         />
    //         <label>
    //             Server : 
    //         </label>
    //         <input
    //             value = { player.server }
    //             onChange = { handleServer }
    //         />
    //         <label>
    //             UID : 
    //         </label>
    //         <input
    //             value = { player.uid }
    //             onChange = { handleUid }
    //         />
    //         <label>
    //             Level : 
    //         </label>
    //         <input
    //             value = { player.level }
    //             onChange = { handleLevel }
    //         />
    //         <label>
    //             Characters : 
    //         </label>
    //         <input
    //             value = { player.details.chars }
    //             onChange = { handleChars }
    //         />
    //         <label>
    //             Weapons : 
    //         </label>
    //         <input
    //             value = { player.details.weapons }
    //             onChange = { handleWeapons }
    //         />
    //         <h2>{ player.name } / { player.server } / { player.level } / { player.uid } has { player.details.chars } characters and { player.details.weapons } weapons in Genshin Impact</h2>
    //     </div>
    // );

    // updating the logic using useImmer - immer provides a special type of object known as Proxy that records what you do with it, it figures out which part of the draft have been changed and produces a completely free object contains your edits.

        const [player, updatePerson] = useImmer({
        name : 'LucaS',
        server : 'Asia',
        uid : 89776789,
        level : 60,
        details : {
            chars : 10,
            weapons : 3,
        }
    });

    function handleName(e) {
        updatePerson(draft => {
            draft.name = e.target.value
        });
    }

    function handleServer(e) {
        updatePerson(draft => {
            draft.server = e.target.value
        });
    }

    function handleUid(e) {
        updatePerson(draft => {
            draft.uid = e.target.value
        });
    }

    function handleLevel(e) {
        updatePerson(draft => {
            draft.level = e.target.value
        });
    }

    function handleChars(e) {
        updatePerson(draft => {
            draft.details.chars = e.target.value
        });
    }

    function handleWeapons(e) {
        updatePerson(draft => {
            draft.details.weapons = e.target.value
        });
    }

        return (
        <div>
            <label>
                Name : 
            </label>
            <input
                value = { player.name }
                onChange = { handleName }
            />
            <label>
                Server : 
            </label>
            <input
                value = { player.server }
                onChange = { handleServer }
            />
            <label>
                UID : 
            </label>
            <input
                value = { player.uid }
                onChange = { handleUid }
            />
            <label>
                Level : 
            </label>
            <input
                value = { player.level }
                onChange = { handleLevel }
            />
            <label>
                Characters : 
            </label>
            <input
                value = { player.details.chars }
                onChange = { handleChars }
            />
            <label>
                Weapons : 
            </label>
            <input
                value = { player.details.weapons }
                onChange = { handleWeapons }
            />
            <h2>{ player.name } / { player.server } / { player.level } / { player.uid } has { player.details.chars } characters and { player.details.weapons } weapons in Genshin Impact</h2>
        </div>
    );


}

function StateUpdates() {

    // react waits until all code in the event handlers has run before processing your state updates.
    // batching means that the UI wont be updated after your event handler and the code inside it has completed its execution
    // react does not batch across multiple intentional events like clicks

    // updating the same state multiple times befores the next re-render

    // const [number, setNumber] = useState(0);

    // function handleClick() {
    //     setNumber(n => n + 1); //updater function
    //     setNumber(n => n + 1);
    //     setNumber(n => n + 1);
    // }

    // return (
    //     <div>
    //         <h2>Number is: { number }</h2>
    //         <button onClick = { handleClick }>
    //             +3
    //         </button>
    //     </div>
    // );

    // updating state after replacing it

    // const [number, setNumber] = useState(0);

    // function handleClick() {
    //     setNumber(number + 5);
    //     setNumber(n => n + 1);
    // }

    // return (
    //     <div>
    //         <h2>Number is { number }</h2>
    //         <button onClick = { handleClick }>
    //             Increment!
    //         </button>
    //     </div>
    // );

    // replacing state after updating it

    // const [number, setNumber] = useState(0);

    // function handleClick() {
    //     setNumber(number + 5);
    //     setNumber(n => n + 1);
    //     setNumber(42);
    // }

    // return (
    //     <div>
    //         <h2>Number is: { number }</h2>
    //         <button onClick = { handleClick }>
    //             Increment!
    //         </button>
    //     </div>
    // );
}

const PlayerDetails = [
    {
        name : 'LucaS',
        uid : '89876789',
        server : 'Asia'

    } , {
        name : 'Nix',
        uid : '87655546',
        server : 'Europe'
    } , {
        name : 'Slayer',
        uid : '78999098',
        server : 'North America'
    } , {
        name : 'Konichivo',
        uid : '67889987',
        server : 'Asia'
    }
]

function State() {
    
    // const [index, setIndex] = useState(0);

    // // function handleNextClick() {
    // //     setIndex(index + 1);
    // // }

    // // function handlePrevClick() {
    // //     setIndex(index - 1);
    // // }

    // let player = PlayerDetails[index];

    // function handleNextClick() {
    //     setIndex(index + 1);
    // }

    // function handlePrevClick() {
    //     setIndex(index - 1);
    // }
    
    // return (
    //     <div>
    //         <h2>Genshin Impact Player Details</h2>
    //         <button onClick = {handleNextClick} disabled = {index === (PlayerDetails.length-1)}>
    //             Next
    //         </button> {' '}
    //         <button onClick = {handlePrevClick} disabled = {index === 0}>
    //             Prev
    //         </button>
    //         <h3>{player.name}</h3>
    //         <h3>{player.uid}</h3>
    //         <h3>{player.server}</h3>
    //     </div>
    // );

    // three steps - trigger, render, commit
    // react doesnt touch the DOM if the rendering result is same as the last time

    // state as a snapshot
    
    // const [isSent, setIsSent] = useState(false);
    // const [message, setMessage] = useState('insert a message here');

    // if(isSent) {
    //     return <h2>Message sent! {message}</h2>
    // }

    // function handleForm(e) {
    //     e.preventDefault();
    //     setIsSent(true);
    //     setMessage(message);
    // }
    
    // return (
    //     <div>
    //         <form onSubmit={e => handleForm(e)}>
    //             <textarea
    //                 placeholder = ""
    //                 value = {message}
    //                 onChange = {e => setMessage(e.target.value) }
    //             />
    //                         <button type = 'submit'>
    //             Submit
    //         </button>
    //         </form>

    //     </div>
    // );

    // setting state only change it for the next render. 
    const [number, setNumber] = useState(0);
    
    function handleClick() {
        setNumber(number + 1);
        setNumber(number + 1);
        setNumber(number + 1);
    }

    return (
        <div>
            <h2>Number is: {number}</h2>
            <button onClick = {handleClick}>
                +3
            </button>
        </div>
    )


    // state over time : a state's value never changes within a render even if the event handler's code is asynchronous. React keeps the state values fixed within one render's event handlers.

    // const [number, setNumber] = useState(0);

    // function handleClick() {
    //     setNumber(number + 5);
    //     setTimeout(() => {
    //         alert(number);
    //     }, 2000);
    // }

    // return (
    //     <div>
    //         <h2>{number}</h2>
    //          <button
    //             onClick = {handleClick}
    //          >
    //             +5
    //          </button>
    //     </div>
    // );

    
} 

function EventHandler({onClick, children}) {

    // function handleClick() {
    //     alert('You clicked the button!');
    // }

    // return (
    //     <div>
    //         <button
    //             onClick = {handleClick}
    //         >Click Me</button>
    //     </div>
    // );

    // reading props in event handlers

    // return (
    //     <div>
    //         <button
    //             onClick = {() => alert(message)}
    //         >
    //             {children}
    //         </button>
    //     </div>
    // );

    // passing event handlers as props

    // return (
    //     <button onClick = {onClick}>
    //         {children}
    //     </button>
    // );

    // event propagation, e.stopPropagation(), e.preventDefault()

    return (
        <div onClick = {(e) => {
                e.stopPropagation();
                alert('You click the div')}}>
            <button onClick = {(e) => {
                e.stopPropagation();
                alert('Playing Genshin')
            }}>
                Genshin
            </button>
            <button onClick = {(e) => {
                 e.stopPropagation();
                 e.preventDefault();
                 alert('Playing Honkai')
            }}>
                Honkai
            </button>
        </div>
    );
}

function PlayGenshin({name}) {
    
    function handleGame() {
        alert(`Playing ${name}!`);
    }
    
    return (
        <EventHandler onClick = {handleGame}>
            Play { name}
        </EventHandler>
    );
}

function PlayHonkai({name}) {
    return (
        <EventHandler onClick = {() => alert(`Playing ${name}`)}>
            Play { name}
        </EventHandler>
    );
}

const details = [
    'Kiyotaka Ayanokoji',
    'Hikigaya Hachiman',
    'Eren Yaegar'
];

const JenshinPlayers = [{
        id : 0,
        name : "LucaS",
        server : "Asia",
    }, {
        id : 1,
        name : "Nix",
        server : "Europe",
    } , {
        id : 2,
        name : "Slayer",
        server : "NA",
    } , {
        id : 3,
        name : "Konichivo",
        server : "Asia",
    }
];

function RenderingList() {

    // map method
    // const listChars = details.map(character => 
    //     <li>
    //         { character }
    //     </li>);
    //     return (
    //         <div>
    //             <ul>{ listChars }</ul>
    //         </div>
    //     );

        // filter method
        const asiaPlayers = JenshinPlayers.filter(player => player.server ==='Asia');
        
        const listPlayers = asiaPlayers.map(player => 
                <li key = { player.id }>
                    { player.name }
                </li>
            )

        return (
            <div>
                <ul className = "text-3xl">
                    { listPlayers }
                </ul>
            </div>
        );

        // give each list item a key
}   

function CondtionalRender({name, isPacked}) {
    // conditional ternary operator 

    // return (
    //     <div>
    //             <li className = "text-3xl"> 
    //                 { isPacked ? (
    //                     <del>
    //                         { name + 'X' }
    //                     </del>
    //                 ) : (
    //                     name
    //                 )}
    //             </li>
    //     </div>  
    // );

    // logical && operator

    // return (
    //     <div>
    //         <li>

    //             { isPacked && <del>{name + 'X'} </del>}

    //         </li>
    //     </div>
    // )

    // conditionally assigning jsx to a variable

    let content = name;

    if(isPacked) {
        content = (
            <del>
                { name + ' X' }
            </del>
        );
    }

    return (
        <div>
            <li className = "text-3xl">
                { content }
            </li>
        </div>
    )

}

function ParentComponent({children}) {
    return (
        <div>
            {children}
        </div>
    );
}

function ChildComponent({name, age, uid}) {
    return (
        <div>
            <ul>
                <li>{name}</li>
                <li>{age}</li>
                <li>{uid}</li>
            </ul>
        </div>
    )
}

function SpreadSyntax(props) {
    return (
        <div>
            <Show
                {...props}
            />
        </div>
    );
}

function Show(props) {
    let name = props.name;
    let age = props.age;
    let uid = props.uid;
    return (
        <div>
            <ul>
                <li>{name}</li>
                <li>{age}</li>
                <li>{uid}</li>
            </ul>
        </div>
    );
}

function GenshinImpact({person,details}) {
    return(
        <div style = {Player.theme}>
            <h2>Name: {person.name} {' '} (UID: {person.uid})</h2>
            <h3>Details are:</h3>
            <ul >
                <li>Characters: {details.chars}</li>
                <li>Weapons: {details.weapons}</li>
                <li>Server:{details.server}</li>
            </ul>
        </div>
    ); 
}

const Player = {
    name : "LucaS",
    details: {
        level : 60,
        skill: "noob",
    },
    theme : {
        backgroundColor : "black",
        color : "pink"
    }
};

function Component () {
    return (
        <div style = {Player.theme}>
            <h1>{Player.name}</h1>
            <ul>
                <li>{Player.details.level}</li>
                <li>{Player.details.skill}</li>
            </ul>
        </div>
    );  
}

export default function QuickRecap() {
    return (
        // <Component/>
        <>
        {/* <GenshinImpact
            person = {{
                name : "LucaS",
                uid : 89765467,
            }}
            details = {{
                chars : 13,
                weapons : 3,
                server : "Asia",
            }}
        />
        <GenshinImpact
            person = {{
                name : "Nix",
                uid : 89760982,
            }}
            details = {{
                chars : 15,
                weapons : 6,
                server : "Europe",
            }}
        />
        <GenshinImpact
            person = {{
                name : "Slayer",
                uid : 87543321,
            }}
            details = {{
                chars : 10,
                weapons : 6,
                server : "NA",
            }}
        /> */}
        {/* <SpreadSyntax/> */}

            {/* <ParentComponent>
                <ChildComponent
                    name = "Sarthak"
                    age = {20}
                    uid = "20BCS2204"
                />
            </ParentComponent> */}
        {/* <ul>
            <CondtionalRender
                name = "LucaS"
                isPacked = {true}
            />
            <CondtionalRender
                name = "Nix"
                isPacked = {false}
            />
            <CondtionalRender
                name = "Asta"
                isPacked = {true}
            />
            </ul> */}

            {/* <RenderingList/> */}

            {/* <EventHandler/> */}

            {/* <EventHandler
                message = "Playing Genshin Impact"
            >
                Play Genshin Impact
            </EventHandler>

            <EventHandler
                message = "Playing Honkai Star Rail"
            >
                Play Honkai Star Rail
            </EventHandler> */}

            {/* <PlayGenshin
                name = "Yoimiya"
            />

            <PlayHonkai
                name = "Himeko"
            /> */}

            {/* <EventHandler/> */}

            {/* <State/> */}

            {/* <StateUpdates/> */}

{/* ignore */}
            {/* <UpdatingObjectInState/> */}

            <UpdatingArrayInState/>

            {/* <Testing/> */}

        </>
    );
}