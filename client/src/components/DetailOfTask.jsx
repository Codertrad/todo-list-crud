import styled from 'styled-components'
import useGetTask from '../hooks/useGetTasks'
import useDeleteTask from '../hooks/useDeleteTask'
import ModifyTask from './ModifyTask'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

const DetailOfTask = () => {
	const [modifyTask, setModifyTask] = useState(false)
	const tasks = useGetTask()
	const { idTask } = useParams()
	const filter = tasks.find(task => task._id === idTask)

	const taskDel = () => {
		useDeleteTask({ idTask })
	}

	const handlerModifyTask = () => {
    setModifyTask(!modifyTask)
  }

	return (
		<>
			<TaskDetail>
				<h1>{filter === undefined ? 'cargando...' : filter.title}</h1>
				<p>{filter === undefined ? 'cargando...' : filter.description}</p>
				<div className='actionsContainer'>
					<button onClick={handlerModifyTask}>Modificar</button>
					<button onClick={taskDel}>Eliminar</button>
				</div>
			</TaskDetail>
			{modifyTask ? <ModifyTask handlerModifyTask={handlerModifyTask} idTask={idTask}/> : ''}
		</>
	)
}

export default DetailOfTask

const TaskDetail = styled.div`
	background-color: #202020;
	width: 65%;
	height: 91vh;
	margin: 2rem;
	border-radius: 16px;
	position: absolute;
	right: 0;
	padding: 2rem;
	h1 {
		text-align: center;
		border-bottom: 1px solid #505050;
		padding-bottom: 1rem;
		text-transform: uppercase;
		font-weight: 900;
		font-style: italic;
		font-size: 2rem;
	}
	p {
		padding: 2rem;
		font-size: 1.5rem;
	}
	.actionsContainer {
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		display: flex;
		justify-content: space-evenly;
		button {
			width: 10rem;
			height: 3rem;
			background-color: #3f51b5;
			border: none;
			color: #fafafa;
			font-size: 1.3rem;
			font-weight: 700;
			text-transform: capitalize;
			cursor: pointer;
			font-style: italic;
			border-radius: 16px;
			margin: 2rem 1rem;
		}
	}
`
