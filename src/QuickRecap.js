function EventHandler({onClick, children}) {

    // function handleClick() {
    //     alert('You clicked the button!');
    // }

    // return (
    //     <div>
    //         <button
    //             onClick = {handleClick}
    //         >Click Me</button>
    //     </div>
    // );

    // reading props in event handlers

    // return (
    //     <div>
    //         <button
    //             onClick = {() => alert(message)}
    //         >
    //             {children}
    //         </button>
    //     </div>
    // );

    // passing event handlers as props

    // return (
    //     <button onClick = {onClick}>
    //         {children}
    //     </button>
    // );

    // event propagation, e.stopPropagation(), e.preventDefault()

    return (
        <div onClick = {(e) => {
                e.stopPropagation();
                alert('You click the div')}}>
            <button onClick = {(e) => {
                e.stopPropagation();
                alert('Playing Genshin')
            }}>
                Genshin
            </button>
            <button onClick = {(e) => {
                 e.stopPropagation();
                 e.preventDefault();
                 alert('Playing Honkai')
            }}>
                Honkai
            </button>
        </div>
    );
}

function PlayGenshin({name}) {
    
    function handleGame() {
        alert(`Playing ${name}!`);
    }
    
    return (
        <EventHandler onClick = {handleGame}>
            Play { name}
        </EventHandler>
    );
}

function PlayHonkai({name}) {
    return (
        <EventHandler onClick = {() => alert(`Playing ${name}`)}>
            Play { name}
        </EventHandler>
    );
}

const details = [
    'Kiyotaka Ayanokoji',
    'Hikigaya Hachiman',
    'Eren Yaegar'
];

const JenshinPlayers = [{
        id : 0,
        name : "LucaS",
        server : "Asia",
    }, {
        id : 1,
        name : "Nix",
        server : "Europe",
    } , {
        id : 2,
        name : "Slayer",
        server : "NA",
    } , {
        id : 3,
        name : "Konichivo",
        server : "Asia",
    }
];

function RenderingList() {

    // map method
    // const listChars = details.map(character => 
    //     <li>
    //         { character }
    //     </li>);
    //     return (
    //         <div>
    //             <ul>{ listChars }</ul>
    //         </div>
    //     );

        // filter method
        const asiaPlayers = JenshinPlayers.filter(player => player.server ==='Asia');
        
        const listPlayers = asiaPlayers.map(player => 
                <li key = { player.id }>
                    { player.name }
                </li>
            )

        return (
            <div>
                <ul className = "text-3xl">
                    { listPlayers }
                </ul>
            </div>
        );

        // give each list item a key
}   

function CondtionalRender({name, isPacked}) {
    // conditional ternary operator 

    // return (
    //     <div>
    //             <li className = "text-3xl"> 
    //                 { isPacked ? (
    //                     <del>
    //                         { name + 'X' }
    //                     </del>
    //                 ) : (
    //                     name
    //                 )}
    //             </li>
    //     </div>  
    // );

    // logical && operator

    // return (
    //     <div>
    //         <li>

    //             { isPacked && <del>{name + 'X'} </del>}

    //         </li>
    //     </div>
    // )

    // conditionally assigning jsx to a variable

    let content = name;

    if(isPacked) {
        content = (
            <del>
                { name + ' X' }
            </del>
        );
    }

    return (
        <div>
            <li className = "text-3xl">
                { content }
            </li>
        </div>
    )

}

function ParentComponent({children}) {
    return (
        <div>
            {children}
        </div>
    );
}

function ChildComponent({name, age, uid}) {
    return (
        <div>
            <ul>
                <li>{name}</li>
                <li>{age}</li>
                <li>{uid}</li>
            </ul>
        </div>
    )
}

function SpreadSyntax(props) {
    return (
        <div>
            <Show
                {...props}
            />
        </div>
    );
}

function Show(props) {
    let name = props.name;
    let age = props.age;
    let uid = props.uid;
    return (
        <div>
            <ul>
                <li>{name}</li>
                <li>{age}</li>
                <li>{uid}</li>
            </ul>
        </div>
    );
}

function GenshinImpact({person,details}) {
    return(
        <div style = {Player.theme}>
            <h2>Name: {person.name} {' '} (UID: {person.uid})</h2>
            <h3>Details are:</h3>
            <ul >
                <li>Characters: {details.chars}</li>
                <li>Weapons: {details.weapons}</li>
                <li>Server:{details.server}</li>
            </ul>
        </div>
    ); 
}

const Player = {
    name : "LucaS",
    details: {
        level : 60,
        skill: "noob",
    },
    theme : {
        backgroundColor : "black",
        color : "pink"
    }
};

function Component () {
    return (
        <div style = {Player.theme}>
            <h1>{Player.name}</h1>
            <ul>
                <li>{Player.details.level}</li>
                <li>{Player.details.skill}</li>
            </ul>
        </div>
    );  
}

export default function QuickRecap() {
    return (
        // <Component/>
        <>
        {/* <GenshinImpact
            person = {{
                name : "LucaS",
                uid : 89765467,
            }}
            details = {{
                chars : 13,
                weapons : 3,
                server : "Asia",
            }}
        />
        <GenshinImpact
            person = {{
                name : "Nix",
                uid : 89760982,
            }}
            details = {{
                chars : 15,
                weapons : 6,
                server : "Europe",
            }}
        />
        <GenshinImpact
            person = {{
                name : "Slayer",
                uid : 87543321,
            }}
            details = {{
                chars : 10,
                weapons : 6,
                server : "NA",
            }}
        /> */}
        {/* <SpreadSyntax/> */}

            {/* <ParentComponent>
                <ChildComponent
                    name = "Sarthak"
                    age = {20}
                    uid = "20BCS2204"
                />
            </ParentComponent> */}
        {/* <ul>
            <CondtionalRender
                name = "LucaS"
                isPacked = {true}
            />
            <CondtionalRender
                name = "Nix"
                isPacked = {false}
            />
            <CondtionalRender
                name = "Asta"
                isPacked = {true}
            />
            </ul> */}

            {/* <RenderingList/> */}

            {/* <EventHandler/> */}

            {/* <EventHandler
                message = "Playing Genshin Impact"
            >
                Play Genshin Impact
            </EventHandler>

            <EventHandler
                message = "Playing Honkai Star Rail"
            >
                Play Honkai Star Rail
            </EventHandler> */}

            {/* <PlayGenshin
                name = "Yoimiya"
            />

            <PlayHonkai
                name = "Himeko"
            /> */}

            <EventHandler/>

        </>
    );
}