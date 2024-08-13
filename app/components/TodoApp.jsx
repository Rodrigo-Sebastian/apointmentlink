'use client';

import React from 'react'
import { useState, useEffect } from 'react';
import { saveToLocalStorage, getFromLocalStorage } from '../utils/localStorage';
import Navbar from './Navbar';

const TodoApp = () => {

    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        const storedTodos = getFromLocalStorage('todos') || [];
        setTodos(storedTodos);
    }, []);

    useEffect(() => {
        saveToLocalStorage('todos', todos);
    }, [todos]);

    const addTodo = () => {
        if(inputValue.trim()) {
            setTodos([...todos, { text: inputValue, completed: false }]);
            setInputValue('');
        }
    };

    const ToggleTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    };

    const deleteTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    const filteredTodos = todos.filter(todo => {
        if(filter === 'completed') return todo.completed;
        if(filter === 'active') return !todo.completed;
        return true;
    });

  return (
    <div className='min-h-screen bg-cover bg-center'
    style={{ backgroundImage: 'url("/images/todoapp.jpg")' }}>
        <Navbar/>
            <div className='flex flex-col items-center mx-4'>
                <h1 className='font-bold text-4xl mb-2 mt-20 text-white'>Välkomen till ApointmentLink</h1>
                <p className='font-light text-sm text-white lg:text-lg lg:w-[600px] lg:text-center'>Här neddan kan du se och filtera alla dina Apointments med hjälp av en enkelt navigering,
                    kan du snabbt se alla dina Apointments, dina pågoende och utförda Apointments!
                </p>
            </div>
            <div className='flex flex-row justify-center mb-10 gap-4 mt-10 mx-4'>
                <input
                    type='text'
                    className='border rounded-md w-[500px] h-[50px] outline-none placeholder:text-center placeholder:italic placeholder:font-light'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder='Vad vill du lägga till på din ApointmentLink?'
                />
                <button className='border bg-blue-400 text-white rounded-md w-[150px] h-[50px] outline-none' onClick={addTodo}>Lägg till</button>
            </div>

        <div className='flex flex-row gap-4 justify-center mx-4'>
            <button className={`border text-sm p-2 lg:p-4 rounded-md ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-white text-black border'}`} onClick={() => setFilter('all')}>Alla Apointments</button>
            <button className={`border text-sm p-1 lg:p-4 rounded-md ${filter === 'active' ? 'bg-green-500 text-white' : 'bg-white text-black border'}`} onClick={() => setFilter('active')}>Pågående Apointments</button>
            <button className={`border text-sm p-1 lg:p-4 rounded-md ${filter === 'completed' ? 'bg-red-500 text-white' : 'bg-white text-black border'}`} onClick={() => setFilter('completed')}>Utförda Apointments</button>
        </div>

        <div className='px-20 mt-8'>
            <ul className='flex flex-row flex-wrap gap-4'>
                {(filteredTodos.map((todo, index) => 
               <li className='flex flex-col flex-wrap justify-center gap-4 bg-white border rounded-xl h-[150px] w-[300px]'>
                <span className='mt-5 mx-4 break-words' style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                    {todo.text}
                </span>
                <div className='flex flex-row gap-4 mx-4 items-center justify-end'>
                    <input
                        type='checkbox'
                        checked={todo.completed}
                        onChange={() => ToggleTodo(index)}
                    />
                    <button className='border bg-red-500 text-white rounded-md w-[100px] h-[50px] ' onClick={() => deleteTodo(index)}>Radera</button>                    
                </div>
               </li>
            ))}
            </ul>
        </div>
    </div>
  )
}

export default TodoApp