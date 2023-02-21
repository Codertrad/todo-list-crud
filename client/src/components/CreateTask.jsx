import useCreateTask from '../hooks/useCreateTasks'
import styled from 'styled-components'

const CreateTask = ({ handlerCreateTask }) => {
	return (
		<ContainerModal>
			<form className='form' onSubmit={useCreateTask}>
				<label className='labelText' htmlFor='titleTask'>
					Nombre de la tarea:
				</label>
				<input
					className='nameInput'
					type='text'
					name='titleTask'
					id='titleTask'
				/>
				<label className='labelText' htmlFor='descriptionTask'>
					Descripcion de la tarea:
				</label>
				<textarea className='descriptionText' name='descriptionTask' />
				<section className='btnContainer'>
				<button type='submit'>Crear tarea</button>
				<button type='button' onClick={handlerCreateTask}>Cancelar</button>
				</section>
			</form>
		</ContainerModal>
	)
}

export default CreateTask

const ContainerModal = styled.div`
	position: absolute;
	margin: auto;
	background-color: #0000009f;
	width: 100vw;
	height: 100vh;
	z-index: 2;
	display: flex;
	justify-content: center;
	align-items: center;
	.form {
		padding: 4rem;
		border-radius: 16px;
		background-color: #202020;
		width: 70vw;
		height: 70vh;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		.labelText {
			font-size: 1.5rem;
			font-weight: 700;
			margin-bottom: 0.5rem;
			text-transform: uppercase;
		}
		.nameInput {
			border: none;
			border-radius: 16px;
			background-color: #363636;
			color: #fafafa;
			font-size: 1.3rem;
			padding: 1rem;
			font-style: italic;
			margin-bottom: 2rem;
		}
		.descriptionText {
			border: none;
			border-radius: 16px;
			background-color: #363636;
			color: #fafafa;
			font-size: 1.3rem;
			padding: 1rem;
			overflow-x: none;
			font-style: italic;
			height: 10rem;
			margin-bottom: 2rem;
			resize: none;
		}
		.btnContainer{
			display: flex;
			justify-content: space-evenly;
			button {
			background-color: #3f51b5;
			width: 20vw;
			height: 3rem;
			border: none;
			color: #fafafa;
			font-size: 1.3rem;
			font-weight: 700;
			text-transform: capitalize;
			cursor: pointer;
			font-style: italic;
			border-radius: 16px;
		}
		}
	}
`
