import { useState, useEffect } from 'react'
import axios from 'axios'

const useGetTask = () => {
  const [tasks, setTasks] = useState([])
  useEffect(() => {
    const getTasks = async () => {
      const get = await axios.get('https://todo-list-crud.vercel.app/tasks')
      const data = get.data
      setTasks(data)
    }
    getTasks()
  }, [])
  return tasks
}

export default useGetTask