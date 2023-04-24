// think about the UI declaratively, not imperatively

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
            <h2>That's correct!</h2>
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

            <DisplayManyVisualStates/>
        </>
    );
}