import { createRoot } from 'react-dom/client';

function InitialRender() {
    const root = createRoot(document.getElementById('root'));
    root.render(<h1>Hello World by createRoot()</h1>)
}

export default function RenderAndCommit() {
    return (
        <>
            <InitialRender/>
        </>
    );
}