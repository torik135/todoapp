import { memo } from 'react';

const FormModalTitle = memo((props) => {
  const { title } = props;
  return (
    <h1 className='text-xl font-semibold' data-cy='modal-add-title'>
      {title}
    </h1>
  );
});

export { FormModalTitle };
