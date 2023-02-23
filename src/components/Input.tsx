import React from 'react';
import './styles.css';

interface Props {
	todo: string;
	setTodo: React.Dispatch<React.SetStateAction<string>>;
	add: (e: React.FormEvent) => void;
}

const Input: React.FC<Props> = ({ todo, setTodo, add }) => {
	return (
		<form className='input_form' onSubmit={add}>
			<input type='input' className='input_form_box' placeholder='Enter a task...'
				value={todo}
				onChange={(e) => setTodo(e.target.value)}
			/>
			<button className='input_form_btn' type='submit'>Add</button>
		</form>
	)
}

export default Input