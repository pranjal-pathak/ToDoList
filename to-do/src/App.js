import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import {Task} from "./components/Task"

function App() {

  const [toDoList,setToDoList] = useState([]);
  const [newTask,setNewTask] = useState("");

  const handleChange=(event)=>{
    setNewTask(event.target.value);
  };

  const clearInputField=(event)=>
  {
    event.target.value = '';
  };

  const addTask =()=>{
    // const newToDoList = [...toDoList,newTask];
    const task={
      id: toDoList.length===0?1:toDoList[toDoList.length-1].id+1,
      taskName: newTask,
      completed: false,
    };
    setToDoList([...toDoList,task]);
    

  };

  const deleteTask=(taskId)=>{
    // const newToDoList = toDoList.filter((task)=>{
      // return (task===taskName)?false:true;
      // task!==taskName will return true if it does not match, so same effect
      setToDoList(toDoList.filter((task)=> task.id!==taskId));
    };

    const completeTask=(taskId)=>{
      setToDoList(toDoList.map((task)=> {
        if(task.id===taskId)
        return {...task,completed:true};
        else
        return task;
      } ));
    }
    
  

  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange}/>
        <button onClick={addTask}>
          Add Task
        </button>
      </div>
      <div className="list">
        {toDoList.map((task)=>
        {
          return(
           <Task taskName={task.taskName} 
                id={task.id} 
                completed={task.completed}
                deleteTask={deleteTask}
                completeTask={completeTask}

            />
          );
        })
        
      }
      </div>

    </div>
  );
}

export default App;
