function PassingEventHandlersAsPropsButton({ onClick, children }) {
    return (
        <>
            <button
                onClick = { onClick }
            >
                { children }
            </button>
        </>
    );
}

function PlayGameButton({ gameName }) {
    function handleGame() {
        alert (`Playing ${ gameName }`);
    }

    return (
        <PassingEventHandlersAsPropsButton
            onClick = { handleGame }
        >
            Playing a Game
        </PassingEventHandlersAsPropsButton>
    );
}

function EndGameButton(  ) {
    return (
        <PassingEventHandlersAsPropsButton
            onClick = { () =>
                alert('Game is Over!')
            }
        >
            End Game
        </PassingEventHandlersAsPropsButton>
    );  
}

function PropsEventHandler({ message, children }) {
    return (
        <>
            <button
                onClick = { () => {
                    alert(message)
                }}
            >
                {children}
            </button>
        </>
    );
}

function Button() {

    function handleClick() {
        alert('You clicked me!');
    }

    return (
        <>
            <button
                onClick = { handleClick }
            >
                Click Me!
            </button>

            <button 
                onClick = { () => {
                    alert('You also clicked me')
                }}
            >
                Click Me-2
            </button>
        </>
    );  
}

export default function EventHandler() {
    return (
        <div>
            {/* <Button
                
            /> */}

            {/* <PropsEventHandler
                message = "Playing Genshin Impact"
            >
                Genshin Impact

            </PropsEventHandler>

            <PropsEventHandler
                message = "Playing Honkai Impact"
            >
                Honkai Impact
                
            </PropsEventHandler> */}

           <PlayGameButton
                gameName= "Genshin Impact"
           />

           <EndGameButton
           />

        </div>
    );
}