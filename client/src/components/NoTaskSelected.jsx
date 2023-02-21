import styled from "styled-components"
import todoList from '../assets/todo-list.svg'

const NoTaskSelected = () => {
  return(
    <Container>
      <img src={todoList} />
      <h2>No hay ninguna tarea seleccionada</h2>
      <p>Seleccione una tarea para leer</p>
    </Container>
  )
}

export default NoTaskSelected

const Container = styled.div`
  background-color: #202020;
	width: 65%;
	height: 91vh;
	margin: 2rem;
	border-radius: 16px;
	position: absolute;
	right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img{
    width: 150px;
    margin-bottom: 2rem;
  }
`