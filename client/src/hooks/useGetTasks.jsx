import { useState, useEffect } from 'react'
import axios from 'axios'

const useGetTask = () => {
  const [tasks, setTasks] = useState([])
  useEffect(() => {
    const getTasks = async () => {
      const get = await axios.get('http://localhost:3000/tasks')
      const data = get.data
      setTasks(data)
    }
    getTasks()
  }, [])
  return tasks
}

export default useGetTask