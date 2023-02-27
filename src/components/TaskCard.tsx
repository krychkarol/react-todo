import React, { useEffect, useRef, useState } from 'react';
import { Task } from '../model';
import './styles.css';
import { RiEdit2Line, RiDeleteBin2Line, RiCheckLine } from 'react-icons/ri'

interface Props {
    task: Task;
    todos: Task[];
    setTodos: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskCard: React.FC<Props> = ({ task, todos, setTodos }) => {

    const [isEdit, setIsEdit] = useState<boolean>(false)
    const [taskText, setTaskText] = useState<string>(task.task)

    const handleIsDone = (id: number) => {
        setTodos(todos.map(task => task.id === id ? { ...task, isDone: !task.isDone } : task))
    }

    const handleDelete = (id: number) => {
        setTodos(todos.filter(task => task.id !== id))
    }

    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        setTodos(todos.map(task => task.id === id ? { ...task, task: taskText } : task))
        setIsEdit(false)
    }

    const editTaskRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        editTaskRef.current?.focus()
    }, [isEdit])
    

    return (
        <form className='task_form' onSubmit={(e) => handleEdit(e, task.id)}>
            <div className="task_form_wrapper">
                {
                    isEdit ?
                        <input className='task_edit' ref={editTaskRef} value={taskText} onChange={(e) => setTaskText(e.target.value)} /> :
                        task.isDone ?
                            <div className='task task_done'>{task.task}</div> :
                            <div className='task'>{task.task}</div>
                }

                <div className='icon_box'>
                    <span className='icon' onClick={(e) => { !isEdit ? setIsEdit(!isEdit) : handleEdit(e, task.id) }}>
                        <RiEdit2Line />
                    </span>
                    <span className='icon' onClick={() => handleDelete(task.id)}>
                        <RiDeleteBin2Line />
                    </span>
                    <span className='icon' onClick={() => handleIsDone(task.id)}>
                        <RiCheckLine />
                    </span>
                </div>
            </div>

        </form>
    )
}

export default TaskCard