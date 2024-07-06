// a component is a javascript function that returns a markup.

function PrintHello() {
    return (        //if you are returning more than one line, parenthesis is a must otherwise the line other than the first one will be ignored!

        // it looks like HTML tags, but they are javascript under the hood, this special syntax is called JSX
        <div>
            <h2>Hello World</h2>
        </div>
    );
}

// export default marks the main functio of the file that you can later import it in other files.
export default function HelloWorld() {
    return (
        <PrintHello/>           //we can even nest the components and keep them in multiple files
        
    );
}
// NOTE: components can render other components but MUST NEVER nest their defiinition

