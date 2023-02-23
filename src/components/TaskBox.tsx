import React from 'react';
import { Task } from '../model';
import './styles.css';
import TaskCard from './TaskCard';

interface Props {
	todos: Task[];
	setTodos: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskBox: React.FC<Props> = ({todos, setTodos}) => {
	return (
		<div className='container'>
			{todos.map(task => (
				<TaskCard task={task} todos={todos} setTodos={setTodos} key={task.id}/>
			))}
		</div>
	)
}

export default TaskBox