function JSXSyntax () {
    return (
        <div>
            <h2>This is a part of the JSX rules</h2>
            <img
                src = "https://i.imgur.com/yXOvdOSs.jpg"
                alt = "pic"
            />
            <ul>
                <li>Nominated for OSCAR</li>
                <li>Achieved Grammy's</li>
            </ul>
        </div>
    );
}

export default function ImportAndExport() {
    return (
        
        <div>
                <JSXSyntax/>
        </div>

    );
}