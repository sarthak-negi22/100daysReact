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

function PropsToComponents() {
    return (
        <div>
            
        </div>
    );  
}

export default function PassingProps() {
    return (
        <div>
            <FamilarProps/>
        </div>
    );
}