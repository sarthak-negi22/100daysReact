import { useState } from "react";

function AvoidDuplicationInState() {
    return (
        <>
            
        </>
    );
}

function AvoidRedundantState() {
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const fullName = firstName + ' ' + lastName;

    function handleFirstName(e) {
        setFirstName(e.target.value);
    }

    function handleLastName(e) {
        setLastName(e.target.value);
    }
    
    return (
        <>
            <h2>Genshin Impact Character Names</h2>
            <label >
                First Name: { ' ' }
                <input
                    value = { firstName }
                    onChange = { handleFirstName }
                />
            </label>
            <br/>
            <label >
                Last Name: { ' ' }
                <input
                    value = { lastName }
                    onChange = { handleLastName }
                />
            </label>
            <p>You entered: <b>{ fullName } </b></p>
        </>
    );
}

function AvoidContradictionInState() {
    
    const [status, setStatus] = useState('typing');
    const [text, setText] = useState('');

    function sendMessage(text) {
        return new Promise(resolve => {
            setTimeout(resolve, 1000);
        })
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('sending');
        await sendMessage(text);
        setStatus('sent');
    }

    const isSending = status === 'sending';
    const isSent = status === 'sent';
    
    
    function handleTextChange(e) {
        setText(e.target.value);
    }
    
    if(isSent) {
        return <h2>Thanks for the feedback!</h2>
    }

    return (
        <>
            <form onSubmit = { handleSubmit }>
                <p>What are your thoughts on Sumeru?</p>
                <textarea
                    disabled = { isSending }
                    value = { text }
                    onChange = { e => handleTextChange(e) }
                />
                <br/>
                <button
                    disabled = { isSending }
                    type = "submit"
                >
                    Submit
                </button>
                { isSending && <p>Sending...</p> }
                {  }
            </form>
        </>
    );
}


function GroupRelatedState() {

    const [position, setPosition] = useState({x : 0, y : 0});

    function handlePosition(e) {
        setPosition({
            x : e.clientX,
            y : e.clientY
        });
    }

    return (
        <>
            <div
                onPointerMove = {e => handlePosition(e) }
                style = {{  
                    position: 'relative',
                    width: '100vw',
                    height: '100vh',
                }}
            />
            <div
                style = {{ 
                    position: 'absolute',
                    backgroundColor: 'Violet',
                    borderRadius: '50%',
                    transform: `translate(${position.x}px, ${position.y}px)`,
                    left: -10,
                    top: -10,
                    width: 20,
                    height: 20,
                 }}
            />
        </>
    );
}

export default function StructuringState() {
    return (
        <>
            {/* <h2>Hello world</h2> */}

            {/* <GroupRelatedState/> */}

            {/* <AvoidContradictionInState/> */}

            <AvoidRedundantState/>
        </>
    );
}