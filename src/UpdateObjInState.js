import { useState } from "react";
import { useImmer } from "use-immer";

// 
function Immer() {
    const [person, updatePerson] = useImmer({
        name : 'LucaS',
        stats: {
            chars: '10',
            weapons: '5',
            server: 'asia',
        }
    });

    function handleName(e) {
        updatePerson(draft => {
            draft.name = e.target.value
        })
    }
    function handleChars(e) {
        updatePerson(draft => {
            draft.stats.chars = e.target.value
        })
    }
    function handleWeapons(e) {
        updatePerson(draft => {
            draft.stats.weapons = e.target.value
        })
    }
    function handleServer(e) {
        updatePerson(draft => {
            draft.stats.server= e.target.value
        })
    }

    return (
        <>
            <label >
                Name:
                <input 
                    name = 'name'
                    value = { person.name }
                    onChange = { handleName }
                />
            </label>
            <label >
                5* chars count:
                <input 
                    name = 'chars'
                    value = { person.stats.chars }
                    onChange = { handleChars }
                />
            </label>
            <label >
                5* weapons count:
                <input 
                    name = 'weapons'
                    value = { person.stats.weapons }
                    onChange = { handleWeapons }
                />
            </label>
            <label >
                Server:
                <input 
                    name = 'server'
                    value = { person.stats.server }
                    onChange = { handleServer }
                />
            </label>
            <p>{ person.name }  { person.stats.chars }  { person.stats.weapons }  { person.stats.server }</p>
        </>
    );
}

// updating a nested object with a single event handler
function NestedObject() {
    const [person, setPerson] = useState({
        name: 'LucaS',
        stats: {
            chars: '10',
            weapons: '5',
            server: 'Asia',
        }
    });

    function handleChange(e) {
        setPerson({
            ...person,
            [ e.target.name ] : e.target.value,
            stats: {
                ...person.stats,
                [ e.target.name ] : e.target.value,
            }
        })
    }

    return(
        <>
            <label >
                Name:
                <input 
                    name = 'name'
                    value = { person.name }
                    onChange = { handleChange }
                />
            </label>
            <label >
                5* chars count:
                <input 
                    name = 'chars'
                    value = { person.stats.chars }
                    onChange = { handleChange }
                />
            </label>
            <label >
                5* weapons count:
                <input 
                    name = 'weapons'
                    value = { person.stats.weapons }
                    onChange = { handleChange }
                />
            </label>
            <label >
                Server:
                <input 
                    name = 'server'
                    value = { person.stats.server }
                    onChange = { handleChange }
                />
            </label>
            <p>{ person.name }  { person.stats.chars }  { person.stats.weapons }  { person.stats.server }</p>
        </>
    );
}

// single event handler for multiple fields
function MultipleField() {
    const [person, setPerson] = useState({
        firstName : ' ',
        lastName: ' ',
        email: ' '
    })

    function handleChange(e) {
        setPerson({
            ...person,
            [ e.target.name ] : e.target.value
        });
    }

    return (
        <>
            <label >
                First Name:
                <input 
                    name = 'firstName'
                    value = { person.firstName }
                    onChange = { handleChange }
                />
            </label>
            <label >
                Last Name:
                <input 
                    name = 'lastName'
                    value = { person.lastName }
                    onChange = { handleChange }
                />
            </label>
            <label >
                Email:
                <input 
                    name = 'email'
                    value = { person.email }
                    onChange = { handleChange }
                />
            </label>
            <p>{ person.firstName }  {'  '}  { person.lastName } {'  '} { person.email }</p>
        </>
    )
}

// object spread syntax to copy every property separately
function Form() {
    const [person, setPerson] = useState({
        firstName: 'abc',
        secondName: 'xyz',
        email: 'abcxyz@gmail.com'
    });

    function handleFirstName(e) {
        setPerson({
            // ...person,                
            // firstName: e.target.value
            // is equivalent to

            firstName: e.target.value,
            secondName: person.lastName,
            email: person.email
        });
    }

    function handleLastName(e) {
        setPerson({
            ...person,
            lastName: e.target.value
        });
    }

    function handleEmail(e) {
        setPerson({
            ...person,
            email: e.target.value
        });
    }
    
    return (
        <>
            <label >
                First Name:

                <input 
                    value = {person.firstName}
                    onChange = { handleFirstName }
                />
            </label>
            <label >
                Last Name:

                <input 
                    value = {person.lastName}
                    onChange = { handleLastName }
                />
            </label>
            <label >
                Email:

                <input 
                    value = { person.email }
                    onChange = { handleEmail }
                />
            </label>
            <p>
                { person.firstName } { person.lastName }  { person.email }
            </p>
        </>
    )

    
}

// mutating a fresh object I have just created
function LocalMutation() {
    const [position, setPosition] = useState({
        // x : 0,
        // y : 0
    });

    function handlePosition(e) {

        const nextPosition = {};

        nextPosition.x = e.clientX;
        nextPosition.y = e.clientY;

        setPosition(nextPosition);
    }

    return(
        <>
             <div
      onPointerMove=  { handlePosition } 
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
      }}>
      <div style={{
        position: 'absolute',
        backgroundColor: 'crimson',
        borderRadius: '50%',
        transform: `translate(${position.x}px, ${position.y}px)`,
        left: -10,
        top: -10,
        width: 20,
        height: 20,
      }} />
    </div>
        </>
    )
}

function MovingDot() {
    const [position, setPosition] = useState({x : 0, y : 0});

    function handlePosition(e) {
        setPosition({ x : e.clientX, y : e.clientY });
  
    }

    return (
        <>
            <div
      onPointerMove=  { handlePosition } 
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
      }}>
      <div style={{
        position: 'absolute',
        backgroundColor: 'cyan',
        borderRadius: '50%',
        transform: `translate(${position.x}px, ${position.y}px)`,
        left: -10,
        top: -10,
        width: 20,
        height: 20,
      }} />
    </div>
        </>
    )
}

// treat any JavaScript object that you put into state as read-only
function SetObject() {
    const [obj, setObj] = useState({x: 0, y: 0});

    function handleObject() {
        // setObj()
    }
}

export default function UpdateObjInState() {
    return (
        <>
            {/* <h2>Hello world</h2> */}

            {/* <MovingDot/> */}

            {/* <LocalMutation/> */}

            {/* <Form/> */}

            {/* <MultipleField/> */}

            {/* <NestedObject/> */}

            <Immer/>
        </>
    );
}