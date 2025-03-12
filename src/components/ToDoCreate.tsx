import React from 'react'

function ToDoCreate() {
  return (
    <div className='todo-create'>
      <input placeholder='To Do Giriniz' className='todo-input' type="text" />
      <button className='todo-create-button'>To Do ekle</button>
    </div>
  )
}

export default ToDoCreate