function PureEg({a,b}) {
    return (
        <div>
            <ol>
                <li>Sum is: { a + b }</li>
                <li>Difference is: { a - b }</li>
            </ol>
        </div>
    );  
}

let temp = 1;

function ImpureEg({ a,b }) {
    return (
        <div>
            <ol>
                <li>Hello user:{ temp+1 }</li>
                <li>Bye user:{ temp+1 }</li>
            </ol>
        </div>
    );
}

function LocalMutation() {
    
    let guests = [];

    for(let i=1;i<10;i++){
        guests.push(<h2>Tea for guests#{ i }</h2>);
    }
    
    return guests;
}

export default function PureComponent() {
    return (
        <div>
            {/* <PureEg
                a = { 10 }
                b = { 20 }
            /> */}

            {/* <ImpureEg
                a = { 10 }
                b = { 20 }
            /> */}

            <LocalMutation/>
        </div>
    );
}