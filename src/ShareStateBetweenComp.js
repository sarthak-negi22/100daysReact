import { useState } from "react";

function AddStateToCommonParent() {
    const [activeIndex, setActiveIndex] = useState(0);

    function Panel({
        title, 
        children,
        isActive,
        onShow
    }) {
        return (
            <>
                <section className = "panel">
                    <h3>{ title }</h3>
                    { isActive ? (
                        <p>{ children }</p>
                    ) : (
                        <button onClick = { onShow }>
                            Show More
                        </button> 
                    )}
                </section>
            </>
        );
    }

    return (
        <>
            <h2>Almighty Raiden Shogun</h2>
            <Panel 
                title = "About"
                isActive = { activeIndex === 0 }
                onShow = { () => setActiveIndex(0)}
            >
                She is the archon of the inazuma
            </Panel>
            <Panel 
                title = "History"
                isActive = { activeIndex === 1 }
                onShow = { () => setActiveIndex(1)}
            >
                She won the archon war
            </Panel>
        </>
    );

}

function PassHardCodedDataFromParent() {
    const [isActive, setIsActive] = useState(false);

    function Panel({ title, children,isActive }) {
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
            <Panel title = "About" isActive = { true }>
                She is the archon of the Inazuma
            </Panel>
            <Panel title = "History" isActive = { false }>
                She took part in the Archons war
            </Panel>
        </>
    );
}

function RemoveStateFromChildComp() {

    const [isActive, setIsActive] = useState(false);

    function Panel({ title, children,isActive }) {
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

            {/* <LiftingStateUpEg/> */}

            {/* <RemoveStateFromChildComp/> */}

            {/* <PassHardCodedDataFromParent/> */}

            <AddStateToCommonParent/>
        </>
    );  
}