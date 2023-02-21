import ListOfTasks from './components/ListOfTasks'
import CreateTask from './components/CreateTask'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DetailOfTask from './components/DetailOfTask'
import NoTaskSelected from './components/NoTaskSelected'
import { useState } from 'react'
import ModifyTask from './components/ModifyTask'

const App = () => {
	const [createTask, setCreateTask] = useState(false)
  

	const handlerCreateTask = () => {
		setCreateTask(!createTask)
	}

	return (
		<>
			<BrowserRouter>
				<ListOfTasks handlerCreateTask={handlerCreateTask} />
				<Routes>
					<Route path='/' element={<NoTaskSelected />} />
					<Route path='/:idTask' element={<DetailOfTask/>}/>
				</Routes>
				{createTask ? <CreateTask handlerCreateTask={handlerCreateTask} /> : ''}
        
			</BrowserRouter>
		</>
	)
}

export default App
