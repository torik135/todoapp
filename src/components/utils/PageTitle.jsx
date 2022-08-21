import { memo } from 'react';

const PageTitle = memo((props) => {
  const { onClick, dataCy, children } = props;

  return (
    <h1 onClick={onClick} className='text-4xl font-bold' data-cy={dataCy}>
      {children}
    </h1>
  );
});

export { PageTitle };
