import { useState } from "react";
import { initialTravelPlan } from "./places";

// five principles for structuring the state:
// 1) group related state
// 2) avoid contradiction in state
// 3) avoid redundant state
// 4) avoid duplicate states
// 5) avoid deeply nested state
// "Make your state as simple as it can be-but not simpler"


// if the state is too nested to update easily, consider making it "flat"
function AvoidDeeplyNestedState() {
    
    const [plan, setPlan] = useState(initialTravelPlan);

    // console.log(plan);

    function handleComplete(parentId, childId) {
        const parent = plan[parentId];
        const nextParent = {
            ...parent,
            childIds : parent.childIds.filter(id => id !== childId)
        };
        setPlan({
            ...plan, 
            [parentId] : nextParent
        });
    }

    function PlaceTree({ id, parentId, placesById, onComplete }) {

        const place = placesById[id];
        // console.log(placesById);
        const childIds = place.childIds;

        return (
            <>
                <li>
                    { place.title } { ' ' }
                    <button onClick = { () => {
                        onComplete(parentId,id); 
                    }}>
                        Complete
                    </button>
                    { childIds.length > 0 && (
                        <ol>
                            { childIds.map(childId => (
                                <PlaceTree
                                    key = { childId }
                                    id = { childId }
                                    parentId = { id }
                                    placesById = { placesById }
                                    onComplete = { onComplete }
                                />
                            ))  }
                        </ol>
                    ) }
                </li>
            </>
        );
    }

    const root = plan[0];
    const planetIds = root.childIds;
    
    return (
        <>
            <h2>Places to visit</h2>
            <ol>
                { planetIds.map(id => (
                    <PlaceTree
                        key = { id }
                        id = { id }
                        parentId = { 0 }
                        placesById = { plan }
                        onComplete = { handleComplete }
                    />
                )) }
            </ol>
        </>
    )
}

const initialCharacters = [
    { name : 'yoimiya', element : 'pyro', id : 0 },
    { name : 'nilou', element : 'hydro', id : 1 },
    { name : 'yae miko', element : 'electro', id : 2 },
]


// the information should not be duplicated in two places. For eg, in the characters we have an array of objects, whereas in selectedId we have just the id of the character, that is only necessary to get the selected character.
function AvoidDuplicationInState() {

    const [characters, setCharacters] = useState(initialCharacters);
    const [selectedId, setSelectedId] = useState(0);

    const selectedCharacter = characters.find(character => 
            character.id === selectedId
        );

    // console.log(selectedCharacter);

    function handleCharacterChange(id,e) {
        setCharacters(characters.map(character => {
            if(character.id === id) {
                return {
                    ...character,
                    name : e.target.value,
                };
            } else {
                return character;
            }
        }));
    }

    return (
        <>
            <h2>Who's your favorite character?</h2>  
            <ul>
                { characters.map((character, index) => (
                    <li key = { character.id }>
                        <input
                            value = { character.name }
                            onChange = { e => {handleCharacterChange(character.id,e)}}
                        />
                        { ' ' }
                        <button
                            onClick = { () => {
                                setSelectedId(character.id);
                            }}
                        >
                            Choose
                        </button>
                    </li>
                )) }
            </ul>
            <p>Your favorite character is: { selectedCharacter.name } ({ selectedCharacter.element })</p>
        </>
    );
}

// if you can canculate some information from the component's props or existing state variables during rendering, you should not put that info into the component's state
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


// you should avoid when state is structured in a way that that several pieces of state may contradict and disagree with each other, leaving room for mistakes.
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

// if some state variables always change together, it might be a good idea to unify them into a single state variable
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

            {/* <AvoidRedundantState/> */}

            <AvoidDuplicationInState/>

            {/* <AvoidDeeplyNestedState/> */}
        </>
    );
}