import { memo } from 'react';
import { AiOutlineWarning as WarningIcon } from 'react-icons/ai';

const ModalDeleteIcon = memo(() => {
  return (
    <div data-cy='modal-delete-icon' className='text-red-500'>
      <WarningIcon data-cy='modal-delete-icon' className='w-20 h-20 text-red-500'/>
    </div>
  );
});

export { ModalDeleteIcon };
