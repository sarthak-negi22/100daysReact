function FamilarProps() {
    return (
        <img
            className = "avatar"
            src = "https://i.imgur.com/1bX5QH6.jpg"
            alt = "random pic"
            width = { 100 }
            height = { 100 }
        />
    );
}

function PropsToComponents({ name, uid, course }) {
    return (
        <div>
            <h1>Name: { name } </h1>
            <h1>UID: { uid } </h1>
            <h1>Course Details: { course.branch } , { course.degree } </h1>
        </div>
    );  
}

function EntireProps(props) {
    let age = props.age;
    let height = props.height;
    let bg = props.bloodGroup;

    return (
        <div>
            <h2>Age: { age } </h2>
            <h2>Height: { height } </h2>
            <h2>BloodGroup: { bg } </h2>
        </div>
    );
}

function JSXSpread(props) {
    return (
        <div className = "JSXSpread" >
            <EntireProps
                { ...props }
            />
            
        </div>
    );  
}

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


function JSXChildren({ children }) {
    return (
        <div className="card">
            { children }
        </div>

    );
}

export default function PassingProps() {
    return (
        <div>
            {/* <FamilarProps/>
            <PropsToComponents
                name = "lucas"
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
                <Parent
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