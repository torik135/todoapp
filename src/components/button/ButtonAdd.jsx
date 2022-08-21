import { memo } from 'react';
import { BsPlusLg as PlusIcon } from 'react-icons/bs';

const ButtonAdd = memo((props) => {
  const { onClick, dataCy } = props;
  return (
    <button
      onClick={onClick}
      className='flex items-center gap-3 px-8 py-3 text-xl font-semibold rounded-full bg-primary text-white hover:scale-90'
      data-cy={dataCy}
    >
      <PlusIcon className='w-6 h-6' />
      Tambah
    </button>
  );
});

export { ButtonAdd };
