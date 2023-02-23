import React, { useState } from 'react';
import './App.css';
import Input from './components/Input';
import TaskBox from './components/TaskBox';
import { Task } from './model';

const App: React.FC = () => {

	const [todo, setTodo] = useState<string>('')
	const [todos, setTodos] = useState<Task[]>([])

	const add = (e: React.FormEvent) => {
		e.preventDefault()

		if (todo) {
			setTodos([...todos, { id: Date.now(), task: todo, isDone: false }])
			setTodo('')
		}
	}

	return (
		<div className='App'>
			<span className='title'>my tasks</span>
			<Input todo={todo} setTodo={setTodo} add={add} />
			<TaskBox todos={todos} setTodos={setTodos} />
		</div>
	);
}

export default App;
