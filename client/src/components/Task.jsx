import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Task = ({ title, description, id }) => {
	return (
		<Link to={`/${id}`}>
			<Container>
				<h2>{title}</h2>
				<p>{description}</p>
			</Container>
		</Link>
	)
}

export default Task

const Container = styled.div`
	border-bottom: 1px solid #505050;
	padding: 1rem;
	h2 {
		text-transform: capitalize;
		font-style: italic;
		font-size: 1rem;
		font-weight: 900;
		color: #fafafa;
		white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
	}
	p {
		color: #fafafa;
		text-transform: uppercase;
		font-size: 1rem;
		white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
	}
	:hover {
		background-color: #505050;
		cursor: pointer;
	}
`
