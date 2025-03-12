import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ToDoType } from '../types/type';
import { createToDo } from '../redux/ToDoSlices';

const ToDoCreate: React.FC = () => {
  const dispatch = useDispatch();
  const [newToDo, setNewToDo] = useState<string>('');

  const HandleCreateTodo = () => {
    if (newToDo.trim().length === 0) {
      alert('Lütfen bir to-do giriniz');
      return;
    }

    const payload: ToDoType = {
      id: Math.floor(Math.random() * 99999999999),
      content: newToDo,
    };

    dispatch(createToDo(payload));
    setNewToDo('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      HandleCreateTodo();
    }
  };

  return (
    <div className='todo-create'>
      <input
        value={newToDo}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewToDo(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder='To Do Giriniz'
        className='todo-input'
        type='text'
      />
      <button onClick={HandleCreateTodo} className='todo-create-button'>
        To Do ekle
      </button>
    </div>
  );
};

export default ToDoCreate;
