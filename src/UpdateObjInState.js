import { useState } from "react";

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
                    value = {person.email}
                    onChange = { handleEmail }
                />
            </label>
            <p>
                { person.firstName } { person.lastName }  { person.email }
            </p>
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

            <Form/>
        </>
    );
}