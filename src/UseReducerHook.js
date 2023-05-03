import { useState } from "react";

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

            <TaskApp/>
        </>
    );
}