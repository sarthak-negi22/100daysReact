import { useState } from "react";
import { initialTravelPlan } from "./places";

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

            {/* <AvoidRedundantState/> */}

            {/* <AvoidDuplicationInState/> */}

            <AvoidDeeplyNestedState/>
        </>
    );
}