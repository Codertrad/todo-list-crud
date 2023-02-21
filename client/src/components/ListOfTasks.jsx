import styled from 'styled-components'
import useGetTask from '../hooks/useGetTasks'
import Task from './Task'
import { useState } from 'react'
import CreateTask from './CreateTask'

const ListOfTasks = ({ handlerCreateTask }) => {
	const tasks = useGetTask()

	return (
		<>
			<ListTask>
				<h1>TAREAS</h1>
				<div className='listOfTasks'>
					{tasks.map(({ id, title, description } = tasks) => {
						return (
							<Task key={id} title={title} description={description} id={id} />
						)
					})}
				</div>
				<button onClick={handlerCreateTask} className='createTask'>
					nueva tarea
				</button>
			</ListTask>
		</>
	)
}

export default ListOfTasks

const ListTask = styled.div`
	position: absolute;
	width: 25%;
	height: 91vh;
	background-color: #202020;
	margin: 2rem;
	border-radius: 16px;
	display: flex;
	flex-direction: column;

	.listOfTasks::-webkit-scrollbar{
		width: 10px;
	}
	.listOfTasks::-webkit-scrollbar-thumb{
		background-color: #3f51b5;
		border-radius: 16px;
	}

	h1 {
		color: #fafafa;
		text-align: center;
		padding: 1rem;
	}

	.listOfTasks {
		overflow: auto;
	}

	.createTask {
		position: relative;
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
`
