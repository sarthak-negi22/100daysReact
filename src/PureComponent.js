// React assumes that every component you write is a pure component

// A function is considered as pure when:
// 1) It minds it own business. It does not change any objects or variables that existed before it was called.
// 2) Same inputs, same outputs. For a certain input, the function should return the same result

function PureEg({a,b}) {
    return (            //for any arbitrary value of a and b, it will always return the same value for those input
        <div>
            <ol>
                <li>Sum is: { a + b }</li>
                <li>Difference is: { a - b }</li>
            </ol>
        </div>
    );  
}


// here as you can see, for every input it changes the value of variables, making it impure. Calling this component several times will produce different JSX
let temp = 0;

function ImpureEg() {
    temp = temp + 1;
    return (        //notice how it will show like 2, 4, 6 (not 1, 2, 3). Because react offers a "strict mode" in which each component twice, helping those components that break the rules.
        // However, the fixed pure version work same even if it was called twice. Pure components are always use to calculate, so calling them twice doesnt change anything.
        <div>
            <ol>
                <li>Hello user:{ temp }</li>
                <li>Bye user:{ temp }</li>
            </ol>
        </div>
    );          //never change preexisting variables or objects while your component is rendering.
}

// However, its completely fine to mutate a variable or object that you created inside the component while rendering. This is called local mutation - a component's little secret
function LocalMutation() {
    
    let guests = [];

    for(let i=1;i<10;i++){
        guests.push(<h2>Tea for guests#{ i }</h2>);
    }
    
    return guests;
}

// Changes like updating the screen, starting an animation, changing data are called side effects, because they are the things that happen on the side, not during rendering.abs
// We use event handlers that run when you perform an action, like clicking a mouse. Even though they are defined inside the component, they dont run while rendering (unless they are called), so they need not to be pure.
// The last resort, is to use an useEffect, to tell react to execute it later, after rendering when side effects are allowed. Try to express the logic with rendering alone.

export default function PureComponent() {
    return (
        <div>
            {/* <PureEg
                a = { 10 }
                b = { 20 }
            /> */}

            {/* <ImpureEg
               
            />
             <ImpureEg
               
            /> */}

            <LocalMutation/>
        </div>
    );
}