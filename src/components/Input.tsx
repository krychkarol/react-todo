import React from 'react';
import './styles.css';

const Input = () => {
  return (
    <form className='input_form'>
        <input type='input' className='input_form_box' placeholder='Enter a task...' />
        <button className='input_form_btn' type='submit'>Add</button>
    </form>
  )
}

export default Input