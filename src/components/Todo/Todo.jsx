import React from 'react';
import { FaTrash } from 'react-icons/fa';

export default function Todo({ todo, onUpdate, onDelete }) {
    const { status, text } = todo;
    const handleDelete = () => onDelete(todo);
    const handleChange = (e) => {
        let status = e.target.checked ? 'completed' : 'active';
        onUpdate({ ...todo, status });
    };
    return (
        <li>
            <input
                type='checkbox'
                id='checkbox'
                checked={status === 'completed'}
                onChange={handleChange}
            />
            <label htmlFor='checkbox'>{text}</label>
            <button onClick={handleDelete}>
                <FaTrash />
            </button>
        </li>
    );
}
