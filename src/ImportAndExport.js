
// this is called default export. It means, the you can put any name of this component when you will import it in other files. 
export default function GenshinImpact () {
    return (
        <div>
            <h2>This is default export</h2>
        <img
            src = "https://i.imgur.com/QIrZWGIs.jpg"
            alt = "Genshin Impact"
        />
        </div>
        
        
    );
}   

// this is called named export, and the name of the component MUST BE SAME with { } when you import it in other files.
export function HonkaiImpact() {
    return (
        <div>
            <h2>This is named export</h2>
            <img
                src = "https://i.imgur.com/QIrZWGIs.jpg"
                alt = "Honkai Impact"
            />
        </div>
    )
}

// NOTE : a single file can have only 1 default export, and many named exports.