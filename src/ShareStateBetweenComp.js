import { useState } from "react";

function LiftingStateUpEg() {
    
    function Panel({ title, children }) {

        const [isActive, setIsActive] = useState(false);
    
        function handleClick() {
            setIsActive(true);
        }

        return (
            <>
                <section className = "panel">
                    <h3>{ title }</h3>
                    { isActive ? (
                        <p>{ children }</p>
                    ) : (
                        <button onClick = { handleClick }>
                            Show More
                        </button>
                    )}
                </section>
            </>
        );
    }
    
    return (
        <>
            <h2>The almighty Raiden Shogun</h2>
            <Panel title = "About">
                She is the archon of the Inazuma
            </Panel>
            <Panel title = "History">
                She took part in the Archons war
            </Panel>
        </>
    );
}

export default function ShareStateBetweenComp() {
    return (
        <>
            {/* <h2>Hello world</h2> */}

            <LiftingStateUpEg/>
        </>
    );  
}