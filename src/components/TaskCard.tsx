import React from 'react';
import { Task } from '../model';
import './styles.css';
import { RiEdit2Line, RiDeleteBin2Line, RiCheckLine } from 'react-icons/ri'

interface Props {
    task: Task;
    todos: Task[];
    setTodos: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskCard: React.FC<Props> = ({ task, todos, setTodos }) => {
    return (
        <form className='task_form'>
            <div className="task_form_wrapper">
                <div className='task'>{task.task}</div>
                <div className='icon_box'>
                    <span className='icon'>
                        <RiEdit2Line />
                    </span>
                    <span className='icon'>
                        <RiDeleteBin2Line />
                    </span>
                    <span className='icon'>
                        <RiCheckLine />
                    </span>
                </div>
            </div>
            
        </form>
    )
}

export default TaskCard