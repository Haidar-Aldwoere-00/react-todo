const TaskList = ({tasks,deleteTask}) => {
    return (
        <ul className="task-list">
            {
            tasks.map((task , index) => <li className="task-item" key={task}>{task}<button className="delete-btn" onClick={() => deleteTask(index)}>Delete</button> </li>)
            }
        </ul>
    );
}
export default TaskList;
