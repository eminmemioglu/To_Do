import React from 'react'
import { TiDeleteOutline } from "react-icons/ti";
import { FaCheck } from "react-icons/fa";
import { ToDoType } from '../types/type';
import { useDispatch } from 'react-redux';
import { removeToDoByID } from '../redux/ToDoSlices';
interface todoProps {
    todoProps: ToDoType


}
function ToDo({ todoProps }: todoProps) {
    const { id, content } = todoProps;
    const dispatch = useDispatch();

    const handleRemoveToDo = () => {
        dispatch(removeToDoByID(id));
    }

    return (
        <div style={{ alignItems: 'center', justifyContent: 'space-between ', flexDirection: 'row', display: 'flex ', border: '1px solid lightgrey', padding: '16px', marginTop: '25px', borderRadius: '5px' }}>
            <div>
                <p>{content}</p>
            </div>
            <div>
                <TiDeleteOutline onClick={handleRemoveToDo} className='icons' style={{ marginRight: '10px', fontSize: '20px' }} />
                <FaCheck className='icons' />

            </div>
        </div>
    )
}

export default ToDo