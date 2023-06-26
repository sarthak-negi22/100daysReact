function CustomHeading({text}) {
    return (
        <h1>{text}</h1>
    )
}

function CustomButton() {
    return (
        <button>Submit</button>
    );
}

function CustomTextField({name}) {
    return (
        <form>
            <label><b>{ name }</b>{' '}</label>
            <input></input>
        </form>
    );
}

function AnotherWebsite({url}) {
    return (
        <a href={url}>Click here</a>
    );
}

function Image({url}) {
    return (
        <img src={url} alt="image"/>
    );
}

function Paragraph() {
    return (
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta consequatur temporibus asperiores fugit iusto at cupiditate deserunt aperiam eveniet nam sint hic explicabo placeat consectetur quisquam culpa voluptatibus, aut exercitationem commodi! Porro modi numquam tenetur dicta sit quia aliquid delectus consectetur. Fuga deleniti dolorum laudantium praesentium tempora tempore accusamus pariatur.</p>
    )
}

function Form() {

    function handleSubmit() {
        
    }

    return (
        <div>
            <form>
                <fieldset>
                    <legend>Personal Details</legend>
                <div>
                    <label>Name:</label>
                    <input></input>
                </div>
                <div>
                    <label>UID:</label>
                    <input></input>
                </div>
                </fieldset>
                <fieldset>
                    <legend>Academic Details</legend>
                <div>
                    <label>Section:</label>
                    <input></input>
                </div>
                <div>
                    <label>Semester:</label>
                    <input></input>
                </div>
                </fieldset>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default function WC_DAY_1(){
    return (
        <div>
            {/* <CustomHeading text = "Winning Camp"/>
            <CustomTextField name = "Name:"/>
            <CustomTextField name = "UID:"/>
            <CustomTextField name = "Section:"/>
            <CustomTextField name = "Semester:"/>
            <CustomButton/>
            <br/>
            <AnotherWebsite url = "https://www.youtube.com/"/>
            <Paragraph/>
            <Image url = "https://images.cnbctv18.com/wp-content/uploads/2022/09/cryptocurrency-2.jpg?im=FitAndFill,width=120,height=90"/> */}

            <Form/>
        </div>
    );
}