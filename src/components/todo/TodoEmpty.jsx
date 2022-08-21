import { memo } from 'react';
import img from '../../assets/img/todo-empty-state.webp'

const TodoEmpty = memo(() => {
  return (
    <div data-cy='todo-empty-state' className='flex justify-center'>
      <img
        src={img}
        alt='todo empty'
        width='500'
        height='500'
      />
    </div>
  );
});

export default TodoEmpty;
