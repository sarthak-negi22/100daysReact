// Browsers used tree structures to model HTML (DOM) and CSS (CSSDOM)
// Likewise, react also uses a tree like structure to manage and model the relationship between the components, which can be helpful to understand how data flows and how to optimize it for performance

import { useState } from "react"

// As we nest components, we have the concept of parent and child relationship, which can be modeled with render tree.

// The render tree is only composed of react components

// A parent component can also render different component, using partial rendering depending on the data pass down.

const quotes = [
    'A quote',
    'Another quote',
    'Last quote',
]

function Footer() {
    return (
        <h4>Copyright</h4>
    )
}

function FancyText({text}) {
    return (
        <h2>{ text }</h2>
    )
}
 
function QuoteGenerator({ children }) {

    const [index, setIndex] = useState(0);
    const quote = quotes[index];
    const changeQuote = () => setIndex((index + 1) % quotes.length) ;

    return (
        <>
            <p>Your quote is:</p>
            <FancyText 
                text = { quote }
            />
            <button onClick = { changeQuote} >
                Next
            </button>
            { children }
        </>
    )
}

export default function RenderTree() {

    return (
        <>
            <FancyText 
                text = 'A react app'
            />
            <QuoteGenerator>
                <Footer/>
            </QuoteGenerator>
        </>
    )
}

// The UI Tree looks as per the nesting goes from App to Footer (in the above example). The top most node is called the root node (App here)

// Top level components are the components that are nearest to the root component, and it affect the rendering performance of all the components beneath them and contain most complextity

// Whereas, leaf components are near the bottomo of a tree, having no child components, which are frequently re-rendered


// Another relationship in react app that can be modeled with a tree is app's Module Dependencies.abs
// As we break up our code into seperate files,  we create JS modules
// Each node in a module dependency tree is a moudle, and each branch represents an 'import statement' in that module.
// The root node of the tree is called root module (entrypoint file). Noteable differences among the two are

// 1) The nodes that make-up the tree in module dependency, represents module, not components.
// 2) Non component module are also represented in this tree. Whereas the render tree only encapsulates components.

// During build time, there is a step that will bundle all the necessary modules to ship to client. Bundler is responsible for that.


