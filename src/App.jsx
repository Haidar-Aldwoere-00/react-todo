import { useState , useEffect} from 'react'
import './App.css'
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

function App() {
""
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("myTasks");
    return saved ? JSON.parse(saved) : [];
  });
  const addTask = () => { 
    if (taskInput.trim() === "") return;
    setTasks([...tasks, taskInput]);
    setTaskInput("");
  };

  const deleteTask = (indexToDelete ) => {
    setTasks(tasks.filter((_,index) => index !== indexToDelete))
  }

  useEffect(() => {
    localStorage.setItem("myTasks", JSON.stringify(tasks));
   }, [tasks]); 

  return (
    <div className="app-container">
      <TaskInput taskInput={taskInput} setTaskInput={setTaskInput} addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  )
}

export default App
