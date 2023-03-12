function PreventDefault() {
    return (
        <>
            <form onSubmit = {e => {
                e.preventDefault();
                alert('Submitting');
            }}>
                <input/>
                <button>Send</button>
            </form>
        </>
    );  
}

function StopPropagation() {
    return (
        <>
            <div class="toolbar" onClick = {() => {
                alert('You click on toolbar');
            }}>
                <StopButton onClick = { () => {
                    alert('Lets play genshin')
                }}>
                    Play Genshin
                </StopButton>

                <StopButton onClick = { () => {
                    alert('Lets play honkai')
                }}>
                    Play Honkai
                </StopButton>
            </div>
        </>
    );  
}

//test comment

function StopButton({ onClick, children }) {
    return (
        <>
            <button onClick = {e => {
                e.stopPropagation();
                onClick();
            }}> 

            { children }

            </button>
        </>
    );
}

function EventPropagation() {
    return (
        <>
            <div class="toolbar" onClick = {() => {
                alert('You clicked on the Toolbar')
            }}>

                <h2>This is a toolbar. Click here</h2>

                <button onClick = {() => {
                    alert('You are playing genshin impact')
                }} >
                    Genshin Impact
                </button>

                <button onClick = {() => {
                    alert('You are playing honkai impact')
                }} >
                    Honkai Impact
                </button>
            </div>
        </>
    );  
}

function HoyoLab({ onPlayingGenshin, onPlayingHonkai }) {
    return (
        <>
            <Button onClick = { onPlayingGenshin }>
                Play Genshin now!
            </Button>

            <Button onClick = { onPlayingHonkai }>
                Play Honkai now!
            </Button>
        </>
    );
}

function NamingEventHandlerProps({ onTouch, children }) {
    return (
        <>
            <button onClick={ onTouch }>
                {children}
            </button>
        </>
    );  
}

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

function Button({ onClick, children }) {

    function handleClick() {
        alert('You clicked me!');
    }

    return (
        <>
            {/* <button
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
            </button> */}

            <button onClick = { onClick }>
                { children }
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

           {/* <PlayGameButton
                gameName= "Genshin Impact"
           />

           <EndGameButton
           /> */}

           {/* <NamingEventHandlerProps
                onTouch = {() => {
                    alert('Playing Genshin Impact')
                }}
           >
                Genshin Impact
            </NamingEventHandlerProps>

            <NamingEventHandlerProps
                onTouch = {() => {
                    alert('Playing Honkai Impact')
                }}
           >
                Honkai Impact
            </NamingEventHandlerProps> */}

            {/* <HoyoLab
                onPlayingGenshin = { () => {
                    alert('You got Raiden Shogun');
                }}
                onPlayingHonkai = { () => {
                    alert('You got Raiden Mei');
                }}
            /> */}

            {/* <EventPropagation/> */}

            {/* <StopPropagation/> */}

            <PreventDefault/>
        </div>
    );
}