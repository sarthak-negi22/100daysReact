import { useState } from "react";
import { useReducer } from "react";

// use the reducer from your component
function ReducerComponent() {
    const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

    function handleAddTask(text) {
        dispatch({              //action object
            type : 'added',
            id : nextId++,
            text : text,
        });
    }

    function handleChangeTask(task) {
        dispatch({
            type : 'changed',
            task : task,
        });
    }

    function handleDeleteTask(taskId) {
        dispatch({
            type : 'deleted',
            taskId : taskId,
        });
    }

    function taskReducer(tasks,action) {
        if (action.type === 'added') {
            return [
                ...tasks,
                {
                    id : action.id,
                    text : action.text,
                    done : false,
                },
            ];
        } else if (action.type === 'changed') {
            return tasks.map((t) => {
                if(t.id === action.task.id) {
                    return action.task;
                } else {
                    return t;
                }
            });
        } else if (action.type === 'deleted') {
            return tasks.filter((t) => t.id != action.id);
        } else {
            throw Error('Unknown action:'+action.type);
        }
    }

    return (
        <>
        <h1>Prague itinerary</h1>
        <AddTask onAddTask={handleAddTask} />
        <TaskList
          tasks={tasks}
          onChangeTask={handleChangeTask}
          onDeleteTask={handleDeleteTask}
        />
      </>
    );
    
}

// second step is to write a reducer function
// function taskReducer(tasks,action) {
//     if (action.type === 'added') {
//         return [
//             ...tasks,
//             {
//                 id : action.id,
//                 text : action.text,
//                 done : false,
//             },
//         ];
//     } else if (action.type === 'changed') {
//         return tasks.map((t) => {
//             if(t.id === action.task.id) {
//                 return action.task;
//             } else {
//                 return t;
//             }
//         });
//     } else if (action.type === 'deleted') {
//         return tasks.filter((t) => t.id != action.id);
//     } else {
//         throw Error('Unknown action:'+action.type);
//     }
// }


// to migrate from useState to useReducer, first step is to move from setting state to dispatch state
// // function DispatchActions() {
    
// //     function handleAddtask(text) {
// //         dispatch({              //action object
// //             type : 'added',
// //             id : nextId++,
// //             text : text,
// //         });
// //     }

// //     function handleChangeTask(task) {
// //         dispatch({
// //             type : 'changed',
// //             task : task,
// //         });
// //     }

// //     function handleDeleteTask(taskId) {
// //         dispatch({
// //             type : 'deleted',
// //             taskId : taskId,
// //         });
// //     }
    
// //     return (
// //         <>
        
// //         </>
// //     );
// }

const initialTasks = [
    {id: 0, text: 'Visit Kafka Museum', done: true},
    {id: 1, text: 'Watch a puppet show', done: false},
    {id: 2, text: 'Lennon Wall pic', done: false},
  ];

let nextId = 3;

function TaskApp() {
    const [tasks, setTasks] = useState(initialTasks);

  function handleAddTask(text) {
    setTasks([
      ...tasks,
      {
        id: nextId++,
        text: text,
        done: false,
      },
    ]);
  }

  function handleChangeTask(task) {
    setTasks(
      tasks.map((t) => {
        if (t.id === task.id) {
          return task;
        } else {
          return t;
        }
      })
    );
  }

  function handleDeleteTask(taskId) {
    setTasks(tasks.filter((t) => t.id !== taskId));
  }

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}


function Task({ task, onChange, onDelete }) {
    const [isEditing, setIsEditing] = useState(false);
    let taskContent;

    if(isEditing) {
        taskContent = (
            <>
                <input
                    value = { task.text }
                    onChange = { (e) => {
                        onChange({
                            ...task,
                            text : e.target.value,
                        });
                    }}
                />
                <button
                    onClick = { () => setIsEditing(false)}>
                    Save
                </button>
            </>
        )
    } else {
        taskContent = (
            <>
                { task.text }
                <button 
                    onClick = {() => setIsEditing(true)}>
                    Edit
                </button>
            </>
        )
    }

    return (
        <>
            <label >
                <input
                    type = "checkbox"
                    checked = { task.done }
                    onChange = { (e) => {
                        onChange({
                            ...task,
                            done : e.target.checked,
                        });
                    }}
                />
                { taskContent }
                <button
                    onClick = { () => onDelete(task.id)}
                >
                    Delete
                </button>
            </label>
        </>
    )
}

function TaskList({ tasks, onChangeTask, onDeleteTask }) {

    return (
        <ul>
            { tasks.map((task) => (
                <li key = { task.id }>
                    <Task
                        task = { task }
                        onChange = { onChangeTask }
                        onDelete = { onDeleteTask }
                    />
                </li>
            )) }
        </ul>    
    );
}

function AddTask({ onAddText }) {
    
    const [text, setText] = useState('');

    function handleChange(e) {
        setText(e.target.value);
    }
    
    return (
        <div>
            <input
                placeholder = "Add text"
                value = { text }
                onChange = { (e) => setText(e.target.value) }
            />{' '}
            <button 
                onClick = {() => {
                    setText('');
                    onAddText(text);
                }}>
                Add
            </button>
        </div>
    )
}

export default function UseReducerHook() {
    return (
        <>
            {/* <h2>Hello world</h2> */}

            {/* <AddTask/> */}

            {/* <TaskApp/> */}

            <ReducerComponent/>
        </>
    );
}