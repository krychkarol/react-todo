import React from 'react';
import './App.css';
import Input from './components/Input';

const App: React.FC = () => {
	return (
		<div className='App'>
			<span className='title'>my tasks</span>
			<Input />
		</div>
	);
}

export default App;
