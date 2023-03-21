import { useState } from "react";

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

            <MovingDot/>
        </>
    );
}