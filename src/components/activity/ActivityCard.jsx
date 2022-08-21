import { memo } from 'react';
import { Link } from 'react-router-dom';

import { ActivityCardTitle } from './ActivityCardTitle';
import { ActivityCardDate } from './ActivityCardDate';
import { ActivityCardDeleteButton } from './ActivityCardDeleteButton';

const ActivityCard = memo((props) => {
  const { index, id, title, created_at, onDelete } = props;

  return (
    <Link to={`/detail/${id}`}>
      <div
        className='bg-white p-5 rounded-xl shadow-lg border border-gray-200 h-56 flex flex-col mb-2 cursor-pointer hover:scale-110'
        data-cy='activity-item'
        id={`itemTodo${index}`}
      >
        <div className='flex-grow'>
          <ActivityCardTitle title={title} />
        </div>
        <div className='flex items-center justify-between'>
          <ActivityCardDate date={created_at} />
          <ActivityCardDeleteButton onDelete={onDelete} />
        </div>
      </div>
    </Link>
  );
});

export { ActivityCard };
