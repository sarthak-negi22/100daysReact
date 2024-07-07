// to display multiple similar components from a collection of data, we use map() and filter() method of JS.

import { Fragment } from "react";

// Rendering data from the arrays
function ListEg() {
    const marks = ['Tabish:98', 'LucaS:87', 'Sarthak:86'];          //first put the data into array

    const showMarks = marks.map(m => (       //map over with it and store the result into a variable
            <>
            <h2>Hello</h2>
            <li>{m}</li>            // this is called immediate return, can be wrapped in () if multiple statement are there. No need to write return keyword
            </>
    ));
    return <ul>{showMarks}</ul>;            //return that variable in a ul
}           //gets a warning in console "Each child in a list should have a unique key prop"

// Filtering array of items. Lets say we want to show people in 2 categories, toppers and noobs , for that we use filter
function FilterEg() {
    const subjMarks = [{
        uid: 2191,
        name: 'Tabish Faridi',
        skill: 'Pro',
        marks : 98
    } , 
        {
            uid: 2204,
            name: 'Sarthak Negi',
            skill: 'Super Noob',
            marks: 86
        },

        {
            uid : 2341,
            name : 'Test',
            skill : 'P2W',
            marks : 67
        },
]

    const getToppers = subjMarks.filter(t =>
            t.marks > 90                //filtering those out whose marks > 90 and storing them in variable
        );

    const getNoobs = subjMarks.filter( n =>
            n.marks < 90                //filtering those whose marks < 90 and storing them in variable
    );

    const showToppers = getToppers.map(student => {         //now map over those variables. Yes after filtering we have to map over with it to show. Filter is just to store the results based on conditions
        return (
            <>
            <li>{ student.name }</li>
            <li>{ student.uid }</li>
            <li>{ student.marks }</li>
            <li>{ student.skill }</li>
            </>
            
        );
    })

    const showNoobs = getNoobs.map(student => {
        return (                //if we use {} then we have to put return keyword, this isnt immediate return. Since arrow function implicitly return the expression right after them
            <>
            <li>{ student.name }</li>
            <li>{ student.uid }</li>
            <li>{ student.marks }</li>
            <li>{ student.skill }</li>
            </>
        );
    })

    return (            //and return the ul
        <>
            <ul>{ showToppers }</ul>        
            <ul>{ showNoobs }</ul>
        </>
    )
}
// JSX elements directly inside map() always needs a key prop - a string or a number that uniquely identifies it among other items in that array.
function ListKey() {
    const subjMarks = [{

        sno: 1,
        uid: 2191,
        name: 'Tabish Faridi',
        skill: 'Pro',
        marks : 98
    } , 

        {
            sno: 3,
            uid: 2204,
            name: 'Sarthak Negi',
            skill: 'Super Noob',
            marks: 86
        }
]           
    const showNewMarks = subjMarks.map(student => {
        return (        //key teels react which array items each component corresponds to (since we map over an array generally)
            // It matters when your array items can be moved/sorted/inserted/deleted. A well chosen key helps react infer what exact has happened, so as to correctly update the DOM tree

            //the shorter <> fragment syntax wont let you add key prop. So when we want to return multiple items in a map, either put them in a div or a more explicit Fragment syntax and pass key to it:
            // They also disappear from DOM, rendering only the html elements in DOM
            <Fragment key = {student.sno}>          
            <li  >{ student.name }</li>      
            <li>{ student.uid }</li>
            <li>{ student.marks }</li>
            <li>{ student.skill }</li>
            </Fragment>     //Keys must be unique among siblings and it must never change, dont generate them while rendering
        );
    });

    //Just like files need names to organize (which help us when we manipulate files), we need JSX keys in an array to serve a similar purpose.

    // if you didnt provide a key, react will use item's index as the key then. however indexes sometimes lead to confusion whenever we manipulate the array
    // Keys must not be generated at fly (Math.random), which will cause keys never to matcch up leading all your components and DOM being recreated evertime, making it slow and taking more memory

    return <ul>{ showNewMarks }</ul>;
}

export default function RenderList() {
    return (
        <div>
                {/* <ListEg/> */}

                {/* <FilterEg/> */}

                <ListKey/>
        </div>
    );
}