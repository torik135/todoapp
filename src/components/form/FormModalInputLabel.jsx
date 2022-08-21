import { memo } from 'react';

const FormModalInputLabel = memo((props) => {
  const { title, dataCy } = props;
  return (
    <label className='block font-medium mb-3' data-cy={dataCy}>
      {title}
    </label>
  );
});

export { FormModalInputLabel };
