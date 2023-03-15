import axios from "axios";

const useDeleteTask = ({idTask}) =>{
  axios.delete(`http://localhost:3000/tasks/${idTask}`)
  setTimeout(() => {
    window.location.href = window.location.href
    window.location.replace('/')
  }, 1000)
}

export default useDeleteTask