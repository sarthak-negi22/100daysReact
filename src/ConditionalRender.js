// components often need to display content on the based of conditions

function StudentDeails({ name, age, marks }) {
    return (
        <div>
            <h2>Student's name:{ name }</h2>
            <h2>Age:{ age }</h2>
            <h2>Marks:{ marks }</h2>

        </div>
        
    );

    
}

function RenderIfElse({ name, age, marks }) {
    if(age > 20 && marks > 80) {
        return <StudentDeails
            age = { age }
            marks = { marks } 
            name = { name }  
        />
    }
}

function RenderTernary({ name, age, marks }) {
    
    return (
        
    age>20 ? (
        <StudentDeails
            name = { name }
            age = { age }
            marks = { marks }
        />
    ) : (
        <h2>Age is less for { name }</h2>
    )
    )
}

function RenderANDOperator({ marks, age, name }) {
    return (
        
            marks>85 && <StudentDeails
                name = { name }
                age = { age }
                marks = {  marks }
            />
        
    );
}

function JSXVariable({ marks, age, name }){          //more verbose, fllexible
    let compMarks = marks;
    let compAge = age;

    if( age > 20){
        compMarks +=10;
    }
    else {
        compMarks -=10;
    }
    

    return (
        <div>
            <StudentDeails
                name = { name }
                age = { compAge }
                marks = { compMarks }
            />
        </div>
    );
}
export default function ConditionalRender(){
    return (
        <div>
            {/* <RenderIfElse
                marks = { 81 }
                age = { 19 }
                name = "Sarthak"
            />
            <RenderIfElse
                marks = { 85 }
                age = { 21 }
                name = "Rohit"
            />
            <RenderIfElse
                marks = { 78 }
                age = { 22 }
                name = "tabish"
            />
            <RenderIfElse
                marks = { 99 }
                age = { 21 }
                name = "Kanishk"
            /> */}
            {/* <RenderTernary
                name = "Sarthak"
                age = { 21 }
                marks = {80}
            />
             <RenderTernary
                name = "Kanishk"
                age = { 19 }
                marks = {80}
            />
             <RenderTernary
                name = "Rohit"
                age = { 18 }
                marks = {80}
            /> */}

            {/* <RenderANDOperator
                name = "Sarthak"
                marks = { 87 }
                age = { 21 }
            />
            <RenderANDOperator
                name = "Kanishk"
                marks = { 99 }
                age = { 21 }
            />
            <RenderANDOperator
                name = "Tabish"
                marks = { 67 }
                age = { 21 }
            />
            <RenderANDOperator
                name = "Rohit"
                marks = { 85 }
                age = { 21 }
            /> */}

            <JSXVariable
                name = "Sarthak"
                age = { 21 }
                marks = { 78 }
            />
            <JSXVariable
                name = "Kanishk"
                age = { 19 }
                marks = { 67 }
            />
            <JSXVariable
                name = "Rohit"
                age = { 23 }
                marks = { 99 }
            />
            <JSXVariable
                name = "Tabish"
                age = { 20 }
                marks = { 89 }
            />
        </div>
    );
}