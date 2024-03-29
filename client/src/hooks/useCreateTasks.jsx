import axios from 'axios'

const useCreateTask = (e) => {
	e.preventDefault()
	const title = e.target[0].value
	const description = e.target[1].value
	const task = {
		title: title,
		description: description,
	}

	axios.post('https://todo-list-crud.vercel.app/tasks', task)
	setTimeout(() => {
		window.location.href = window.location.href
		window.location.replace('/')
	}, 1000)
}

export default useCreateTask
