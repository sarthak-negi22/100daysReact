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

            <ParentComponent>
                <ChildComponent
                    name = "Sarthak"
                    age = {20}
                    uid = "20BCS2204"
                />
            </ParentComponent>

        </>
    );
}