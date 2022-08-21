import { memo } from 'react';

import { PriorityIndicator } from '../utils/PriorityIndicator';

import { MdModeEdit as EditIcon } from 'react-icons/md';
import { RiDeleteBin6Fill as DeleteIcon } from 'react-icons/ri';

const TodoItem = memo((props) => {
  const { todo, onChangeIsActive, onDelete, onEdit } = props;

  return (
    <div
      data-cy='todo-item'
      className='relative flex items-center gap-5 bg-white px-6 py-4 border rounded-lg mb-3'
    >
      <input
        className='h-5 w-5 cursor-pointer'
        onChange={onChangeIsActive}
        type='checkbox'
        data-cy='todo-item-checkbox'
        data-checked={!todo.is_active}
        checked={!todo.is_active}
      />
      <PriorityIndicator
        data-cy='todo-item-priority-indicator'
        priority={todo.priority}
      />
      <p
        data-cy='todo-item-title'
        className={`text-xl font-bold ${
          !todo.is_active && 'line-through opacity-50'
        }`}
      >
        {todo.title}
      </p>
      <button onClick={() => onEdit(todo)} data-cy='todo-item-edit-button'>
        <EditIcon className='w-6 h-6' />
      </button>
      <button
        data-cy='todo-item-delete-button'
        onClick={() => onDelete(todo)}
        className='absolute top-1/2 -translate-y-1/2 right-5 h-full w-14 grid place-items-center'
      >
        <DeleteIcon className='w-6 h-6' />
      </button>
    </div>
  );
});

export { TodoItem };
