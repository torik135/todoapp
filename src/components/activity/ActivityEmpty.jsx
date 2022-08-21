import { memo } from 'react';
import img from '../../assets/img/activity-empty-state.webp'
const ActivityEmpty = memo(() => {
  return (
    <div className='flex justify-center' data-cy='activity-empty-state'>
      <img
        src={img}
        alt='activity empty'
        width='600'
        height='600'
      />
    </div>
  );
});

export default ActivityEmpty;
