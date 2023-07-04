// think about the UI declaratively, not imperatively
// 5 steps : 
// a) identify your component's visual states
// b) determine what triggers those state changes
// c) represent the state in memory using useState
// d) remove any non-essential state variables
// e) connect the event handlers to set the state

import { useState } from "react";

// your goal is to prevent the cases where the state in memory doenst represent any valid UI that you had meant to a user to see while removing non-essential state variables
function DeclarativeForm() {
    
    const [answer, setAnswer] = useState('');
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('typing');

    if(status === 'success') {
        return <h1>That's Correct!</h1>
    }

    function submitForm(answer) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let incorrectAnswer = answer.toLowerCase() !== 'nahida';
                if(incorrectAnswer) {
                    reject(new Error(answer + ' is not the dendro archon!'));
                }
                else {
                    resolve();
                }
            }, 1000);
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('submitting');

        try {
            await submitForm(answer);
            setStatus('success');
        } catch (err) {
            setStatus('typing');
            setError(err);
        }
    }

    function handleTextAreaChange(e) {
        setAnswer(e.target.value);
    }
    
    return (
        <>
            <h2>Test Quiz</h2>
            <p>What is the name of the dendro archon?</p>
            <form onSubmit = { handleSubmit }>
                <textarea
                    value = { answer }
                    onChange = { handleTextAreaChange }
                    disabled = { status === 'submitting' }
                />
                <br/>
                <button
                    disabled = { answer.length === 0 || status === 'submitting' }
                >
                    Submit
                </button>
                { error != null && 
                <p classname = 'Error'>
                    { error.message }
                </p> }
            </form>
        </>
    );
}

function DisplayManyVisualStates() {
    
    const visualStaes = [
    'empty', 
    'typing',
    'submitting',
    'success',
    'error',
];
    
    return (
        <>
            { visualStaes.map(state => (
                <section key = { state }>
                    <h4>Form ({ state }):</h4>
                    <Form status = {state}/>
                </section>
            )) }
        </>
    );
}

function Form({ status = 'typing' }) {
    if(status === 'success') {
        return( 
            <>
            <h2>That's correct!</h2>
            <hr/>
            </>
        );
    }

    return(
        <>
            <h2>A test quiz</h2>
            <p>In which city there are no islands?</p>
            <form>
                <textarea 
                    disabled = { status === 'submitting' }
                    />
                    <br/>
                <button
                    disabled = { status === 'empty' || status === 'submitting' } 
                    >
                    Submit
                </button>
                { status === 'error' &&
                    <h2>Good guess but it's a wrong answer</h2>
                }
            </form>
            <hr />
        </>
    );
    
}

export default function ReactToInputWithState() {
    return (
        <>
            {/* <h2>Hello world</h2> */}

            {/* <Form/> */}

            {/* <DisplayManyVisualStates/> */}

            <DeclarativeForm    />
        </>
    );
}