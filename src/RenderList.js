function ListEg() {
    const marks = ['Tabish:98', 'Kanishk:96', 'Sarthak:86'];

    const showMarks = marks.map(m => 
            <li>{m}</li>
        );
    return <ul>{showMarks}</ul>; 
}

function FilterEg() {
    const subjMarks = [{
        uid: 2191,
        name: 'Tabish Faridi',
        skill: 'Pro',
        marks : 98
    } , 

        {
            uid: 9398,
            name: 'Kanishk Soni',
            skill: 'Ultra Pro',
            marks: 96
        
    } , 
        {
            uid: 2204,
            name: 'Sarthak Negi',
            skill: 'Super Noob',
            marks: 86
        }, 
        {
            uid: 10110,
            name: 'Rohit Soni',
            skill: 'Guitarist',
            marks: 76
        }
]

    const getToppers = subjMarks.filter(t =>
            t.marks > 90
        );

    const getNoobs = subjMarks.filter( n =>
            n.marks < 90
    );

    const showToppers = getToppers.map(student => {
        return (
            <>
            <li>{ student.name }</li>
            <li>{ student.uid }</li>
            <li>{ student.marks }</li>
            <li>{ student.skill }</li>
            </>
            
        );
    })

    const showNoobs = getNoobs.map(student => {
        return (
            <>
            <li>{ student.name }</li>
            <li>{ student.uid }</li>
            <li>{ student.marks }</li>
            <li>{ student.skill }</li>
            </>
        );
    })

    return (
        <>
            <ul>{ showToppers }</ul>
            <ul>{ showNoobs }</ul>
        </>
    )
}

function ListKey() {
    const subjMarks = [{

        sno: 1,
        uid: 2191,
        name: 'Tabish Faridi',
        skill: 'Pro',
        marks : 98
    } , 

        {
            sno: 2,
            uid: 9398,
            name: 'Kanishk Soni',
            skill: 'Ultra Pro',
            marks: 96
        
    } , 
        {
            sno: 3,
            uid: 2204,
            name: 'Sarthak Negi',
            skill: 'Super Noob',
            marks: 86
        }, 
        {
            sno: 4,
            uid: 10110,
            name: 'Rohit Soni',
            skill: 'Guitarist',
            marks: 76
        }
]           
    const showNewMarks = subjMarks.map(student => {
        return (
            <>
            <li key={ student.sno } >{ student.name }</li>
            <li>{ student.uid }</li>
            <li>{ student.marks }</li>
            <li>{ student.skill }</li>
            </>
        );
    });

    return <ul>{ showNewMarks }</ul>;
}

export default function RenderList() {
    return (
        <div>
                {/* <ListEg/> */}

                {/* <FilterEg/> */}

                <ListKey/>
        </div>
    );
}