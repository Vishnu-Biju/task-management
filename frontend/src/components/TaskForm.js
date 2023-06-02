 import { useState } from 'react'
 import { useTasksContext } from '../hooks/useTasksContext'

const TaskForm = () => {
  const { dispatch } = useTasksContext()
  const [title, setTitle] = useState('')
  
  const [description, setDescription] = useState('')
  const [time, setTime] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const task = {title, description, time}
    
    const response = await fetch('/api/tasks', {
      method: 'POST',
      body: JSON.stringify(task),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    }
    if (response.ok) {
      setError(null)
      setTitle('')
      setDescription('')
      setTime('')
      dispatch({type: 'CREATE_TASK', payload: json})
    }

  }

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>Add a New Task</h3>

      <label>Task Title:</label>
      <input 
        type="text" 
        onChange={(e) => setTitle(e.target.value)} 
        value={title}
      />

      <label>description:</label>
      <input 
        type="text" 
        onChange={(e) => setDescription(e.target.value)} 
        value={description}
      />

      <label>time remaining:</label>
      <input 
        type="text" 
        onChange={(e) => setTime(e.target.value)} 
        value={time} 
      />

      <button>Add Task</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default TaskForm