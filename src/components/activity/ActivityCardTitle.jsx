import { memo } from 'react';

const ActivityCardTitle = memo((props) => {
  const { title } = props;
  return (
    <h3 className='text-xl font-bold' data-cy='activity-item-title'>
      {title}
    </h3>
  );
});

export { ActivityCardTitle };
