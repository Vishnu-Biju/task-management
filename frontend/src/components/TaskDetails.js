
import { useTasksContext } from '../hooks/useTasksContext'

//date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const TaskDetails = ({ task }) => {

  const { dispatch } = useTasksContext()

  const handleClick = async () => {
    const response = await fetch('/api/tasks/' + task._id, {
      method: 'DELETE'
    })
   const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_TASK', payload: json})
    }
  }
  const handleUpdate = async () => {
    const response = await fetch('/api/tasks/' + task._id, {
      method: 'PATCH'
    })
   const json = await response.json()

    if (response.ok) {
      dispatch({type: 'UPDATE_TASK', payload: json})
    }
    
  
  }

  return (
    <div className="task-details">
      <h4>{task.title}</h4>
      <p><strong>description: </strong>{task.description}</p>
      <p><strong>time remaining : </strong>{task.time}</p>
      <p><strong>status: </strong>{task.status}</p>
      <p>{formatDistanceToNow(new Date(task.createdAt), { addSuffix: true })}</p>
      <span className='material-symbols-outlined'onClick={handleClick}>delete</span>
      <button className='update' onClick={handleUpdate}>update</button>
    </div>
  )
}

export default TaskDetails