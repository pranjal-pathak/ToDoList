export const Task =(props)=>
{
    return(
            <div style={{color: props.completed ? "green":"red"}}>

            <h1>{props.taskName}</h1>
            <button onClick={()=>props.deleteTask(props.id)}>X</button> 
            {/* because the delete task function contains an argument so we have to wrap it inside of a function, kinda weird  */}
            <button onClick={()=>props.completeTask(props.id)}>Completed</button>
            </div>
    );
};