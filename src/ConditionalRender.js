// components often need to display content on the based of conditions
// syntax like if else, &&, ?: operator are used to do so

function StudentDeails({ name, age, marks }) {
    return (
        <div>
            <h2>Student's name:{ name }</h2>
            <h2>Age:{ age }</h2>
            <h2>Marks:{ marks }</h2>

        </div>
        
    );
}
// here we are using if else syntax to check the marks and age prop, and depending on the condition as true or false, the code returns a different JSX
function RenderIfElse({ name, age, marks }) {
    if(age > 20 && marks > 80) {
        return <StudentDeails
            age = { age }
            marks = { marks } 
            name = { name }  
        />
    }
}

// however, using if-else, it sometimes lead to repetation of code. To avoid that, ternary operator is more used for a compact syntax
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
    )       //the above two examples are completely equivalent, since you might assume that one of them might create two "instances" of a JSX element
    // But JSX elements arent instances, they dont hold any internal state and arent real DOM nodes. They are lightweight descriptions, like blueprint
}
// when we want to render a JSX when the condition is true, otherwise render nothing if its false.
function RenderANDOperator({ marks, age, name }) {
    return (
        
            marks>85 && <StudentDeails              //comare this
                name = { name }         //rending this if its true, otherwise nothing
                age = { age }
                marks = {  marks }
            />
        
    );          //JS converts the expression into boolean, to test the condition. But if the expression is 0 (like counter && <Li>.....</li>) then react will just render 0, since && returns the first falsy value (if the value is falsy like 0 it returns itself)
}

// this is a much cleaner way to use JSX with a variable for conditionally render
function JSXVariable({ marks, age, name }){          //more verbose, fllexible
    let compMarks = marks;
    let compAge = age;

    if( age > 20){
        compMarks +=10;             //the value of props wont be changed, only the local variables will be changed
    }
    else {
        compMarks -=10;
    }
    
    // also works for arbitrary JSX like:
    let messageContent = age;

    if(messageContent > 20){

     messageContent = (             //arbitrary JSX, not only for text
        <del>
            This is a message content       
        </del>
    )
}



    return (
        <div>
            <StudentDeails
                name = { name }
                age = { compAge }
                marks = { compMarks }
            />
            { messageContent }              
        </div>
    );
}
export default function ConditionalRender(){
    return (
        <div>
            <RenderIfElse
                marks = { 81 }
                age = { 19 }
                name = "Sarthak"
            />
            
            {/* <RenderIfElse
                marks = { 78 }
                age = { 22 }
                name = "tabish"
            />
            
            <RenderTernary
                name = "Sarthak"
                age = { 21 }
                marks = {80}
            />
            
            <RenderANDOperator
                name = "Sarthak"
                marks = { 87 }
                age = { 21 }
            />
            
            <RenderANDOperator
                name = "Tabish"
                marks = { 67 }
                age = { 21 }
            />
            

            <JSXVariable
                name = "Sarthak"
                age = { 21 }
                marks = { 78 }
            />
           
            <JSXVariable
                name = "Tabish"
                age = { 20 }
                marks = { 89 }
            /> */}
        </div>
    );
}