function UseCurlyBraces() {

    const alt = "LucaS";
    const src = "https://i.imgur.com/7vQD0fPs.jpg";

    return (
        <div>
            <h2>This is an example of Curly Braces (a window to JS)</h2>       

            <img
                src = { src }
                alt = { alt }
            />

        </div>
    );
}

function UseCurlyBracesWithObject() {
    return (
        <div>
            <ul 
                style = {{ 
                    backgroundColor: 'red',
                    color: 'yellow'
                 }}
            >
                <li>Item-1</li>
                <li>Item-2</li>
                <li>Item-3</li>

            </ul>
        </div>
    );
}

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