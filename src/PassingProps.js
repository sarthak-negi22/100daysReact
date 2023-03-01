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
        <div>
            
        </div>
    );  
}

export default function PassingProps() {
    return (
        <div>
            <FamilarProps/>
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

        </div>
    );
}