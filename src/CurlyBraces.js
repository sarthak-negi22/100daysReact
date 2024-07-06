// curly braces { } are used to open a dynamic window to javascript.

function UseCurlyBraces() {

    const alt = "LucaS";            
    const src = "https://i.imgur.com/7vQD0fPs.jpg";
    const text = "Test"

    //we can use curly braces in two ways:
    // 1) as texts directly in html tags
    // 2) as attributes immediately followed by =
    return (
        <div>
            <h3>{text}</h3>
            <h2>This is an example of Curly Braces (a window to JS)</h2>       

            <img
                className = "avatar"
                src = { src }               //passing strings
                alt = { alt }
            />

        </div>
    );
}

// in addition to string number and other expressions, we can also pass objects in JSX
function UseCurlyBracesWithObject() {
    return (
        <div>
            <ul 
                style = {{              //since objects are denoted in {} themselves, hence to pass the object you need to wrap the object in another {}. Used for inline style using style attribute
                    backgroundColor: 'red',
                    color: 'yellow'         //notice they are written in camelCase too
                 }}
            >
                <li>Item-1</li>
                <li>Item-2</li>
                <li>Item-3</li>

            </ul>
        </div>
    );
}
// we can even more several expression in an object, and reference them in JSX using {}
export default function CurlyBraces() {
    return (
        <div>
            <UseCurlyBraces/>
        </div>
    );
}

export function ObjectEg () {
    return (
        <div>
            <UseCurlyBracesWithObject/>
        </div>
    );
}