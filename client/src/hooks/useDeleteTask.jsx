import axios from "axios";

const useDeleteTask = ({idTask}) =>{
  axios.delete(`https://todo-list-crud.vercel.app/tasks/${idTask}`)
  setTimeout(() => {
    window.location.href = window.location.href
    window.location.replace('/')
  }, 1000)
}

export default useDeleteTask