const TaskInput = ({taskInput,setTaskInput,addTask}) => {
    return (
        <div className="input-group">
            <input className="task-input" type="text" placeholder="Enter a task" value={taskInput} onChange={ (e) =>setTaskInput(e.target.value)} />
            <button className="add-btn" onClick={addTask}>Add</button>
        </div>
    );
}
export default TaskInput;
