// JSX is a syntax extension that that lets you write HTML-like markup in javascript files.
// react provides rendering logic and markup in one place, called components

// 1st rule : react component must return single parent tag, multiple elements should be inside a div or fragment (<>) without leaving any trace in the browser for the html tree. Because JSX looks like HTML but its actually transformed into javascript objects, and a function cant return two objects without wrapping it an array, just like a component cant return two elements, they must be wrapped inside a parent tag

// 2nd rule : jsx requires to explicity close all the tags

// 3nd rule : camelCase all the things. 
// NOTE : Since JSX is javascript under the hood, it cant have reserved words as attributes names like classo of img tag. Hence we use className named after corresponding DOM property, since class is a reserved word in js

function JSXSyntax () {
    return (        
        <div>           
            <h2>This is a part of the JSX rules</h2>
            <img
                src = "https://i.imgur.com/yXOvdOSs.jpg"
                alt = "pic"
            />
            <ul>
                <li>Nominated for OSCAR</li>
                <li>Achieved Grammy's</li>
            </ul>
        </div>
    );
}

export default function ImportAndExport() {
    return (
        
        <div>
            <JSXSyntax/>
        </div>

    );
}

// TIP : use a JSX convertor to convert all these attributes in existing markup, like Babel