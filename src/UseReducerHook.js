import { useState } from "react";

const initialTasks = [
    {id: 0, text: 'Visit Kafka Museum', done: true},
    {id: 1, text: 'Watch a puppet show', done: false},
    {id: 2, text: 'Lennon Wall pic', done: false},
  ];

function TaskList({ tasks }) {



    return (
        <div>
            { tasks.map((t) => {
                <input
                    
                />
            }) }
        </div>
    );
}

function AddTask() {
    return (
        <div>
            <input
                type = "text"
                placeholder = "Add text"
            />{' '}
            <button>
                Add
            </button>
        </div>
    )
}

export default function UseReducerHook() {
    return (
        <>
            {/* <h2>Hello world</h2> */}

            <AddTask/>
        </>
    );
}