function Form() {
    return (
        <div>
            <form>
                <fieldset>
                    <legend>Personal Details</legend>
                <div>
                    <label>First Name{' '}</label>
                    <input type = "text"></input>

                    <label>Last Name{' '}</label>
                    <input type = "text"></input>
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

export default function WC_DAY_2() {
    return (
        <>
            <Form/>
        </>
    );
}