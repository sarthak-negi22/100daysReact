// react components used props to communicate with each other. Props means properties.
// props can pass any value to the components, including functions, objects, arrays.


function FamilarProps() {
    return (
        <img
            className = "avatar"                //these are the familar props that can be passed to img tag
            src = "https://i.imgur.com/1bX5QH6.jpg"
            alt = "random pic"
            width = { 100 }         //these tags are predefined, ReactDOM conforms to the HTML standard
            height = { 100 }
        />
    );
}

// we can pass ANY prop to our components to customize them.
function PropsToComponents({ name, uid, course }) {         //here we accept those props and can use it/customize it accordingly. 
    return (        //think of props as adjustable knobs that you can adjust, they serve the same role as arguments serve for functions.
        <div>
            <h1>Name: { name } </h1>            
            <h1>UID: { uid } </h1>
            <h1>Course Details: { course.branch } , { course.degree } </h1>
        </div>
    );      
}

function EntireProps(props) {    //an object that contains all the props pass into as keys. Thats why we destructure to get only those props when needed
    let age = props.age;
    let height = props.height;
    let bg = props.bloodGroup;

    return (            //we can also specify default value to a props, just like arguments. When no value will be provided or when propName = {undefined}, default value will be used, otherwise it will be overwritten (even with null or 0)
        <div>
            <h2>Age: { age } </h2>
            <h2>Height: { height } </h2>
            <h2>BloodGroup: { bg } </h2>            
        </div>
    );      //here the parent component is passing all of its props (name, uid, course) to its child component (no child component there, but the div could be a custom React component)
}

// to avoid repetition and for the need of a special spread syntax, we can use spread operator
function JSXSpread(props) {
    return (
        <div className = "JSXSpread" >
            <EntireProps
                { ...props }                //the entire props object from parent component is passed to its child component without listing each of them
            />
            
        </div>
    );  
}

// However, use spread syntax with RESTRAINT. If you are using it in most of the components, its better to split the components and pass children as JSX itself! 
function Parent({ src, name, alt }) {
    return (
        <div>
            <img
                src = { src }
                name = { name }
                alt = { alt }
            />
        </div>
    );
}

function Child({ head, para }) {
    return (
        <div>
            <h2>{ head }</h2>
            <p> { para } </p>
        </div>
    );
}

// when we nest content inside JSX tag, the parent component receive that component in a prop called children
function JSXChildren({ children }) {
    return (
        <div className="card">
            { children }
        </div>

    );      //a children prop is like a hole, that can be filled by its parent component by arbitrary JSX
}

// props are not always static, they are read-only (immutable) snapshops that change for every render

// Dont try to change props, if we do so, the compoent will ask its parent component to pass it different props (a new whole object), the old props will be cast aside and eventually JS engine will reclaim the memory taken by them.
export default function PassingProps() {
    return (
        <div>
            {/* <FamilarProps/> */}
            {/* <PropsToComponents
                name = "lucas"          //here we are passing props to children component (PropsToComponents) from the parent component (PassingProps)
                uid = "20bcs2204"
                course = {{
                    branch : "cse",
                    degree : "UG"
                }}
            />

            <EntireProps
                age = { 20 }
                height = { 170 }
                bloodGroup = "AB+"
            />

            <JSXSpread
                age = { 22 }
                height = { 178 }
                bloodGroup = "O+"
            /> */}

            <JSXChildren>
                <Parent         //here the parent compoment (JSXChildren) receive the context of its nested components (Parent, Child) as children prop
                    src = "https://i.imgur.com/1bX5QH6.jpg"
                    name = "photo"
                    alt = "random"
                />

                <Child
                    head = "This is a pic"
                    para = "This is a great person who got so many awards"
                />
            </JSXChildren>

        </div>
    );
}