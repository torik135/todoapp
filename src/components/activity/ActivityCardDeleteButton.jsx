import { memo } from 'react';
import {BsTrash as DeleteIcon} from 'react-icons/bs'

const ActivityCardDeleteButton = memo((props) => {
  const { onDelete } = props;

  return (
    <button onClick={onDelete} data-cy='activity-item-delete-button'>
      <DeleteIcon className='w-6 h-6'/>
    </button>
  );
});

export { ActivityCardDeleteButton };
