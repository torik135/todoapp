import { memo } from 'react';
import { FiAlertCircle as Icon } from 'react-icons/fi';

const AlertIcon = memo(() => {
  return (
    <>
      <Icon
        data-cy='modal-information-icon'
        className='w-6 h-6 text-xl text-green-500'
      />
    </>
  );
});

export { AlertIcon };
