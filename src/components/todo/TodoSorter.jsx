import { sorts } from '../../data/data';
import { Listbox } from '@headlessui/react';
import { memo } from 'react';
import { BiSort as SortIcon } from 'react-icons/bi';
import { AiOutlineCheck as CheckIcon } from 'react-icons/ai';

const TodoSorter = memo((props) => {
  const { selected, getValue } = props;

  return (
    <Listbox
      value={selected}
      onChange={getValue}
      as='div'
      className='relative z-20'
    >
      <Listbox.Button
        className='h-14 w-14 rounded-full border border-gray-300 grid place-items-center'
        data-cy='todo-sort-button'
      >
        <SortIcon className='w-7 h-7' />
      </Listbox.Button>
      <Listbox.Options
        className='absolute top-full mt-2 bg-white grid py-2 w-56 rounded-md shadow-lg'
        data-cy='sort-parent'
      >
        {sorts.map((sort) => (
          <Listbox.Option
            key={sort.name}
            value={sort.name}
            className='flex items-center justify-between px-7 py-3.5 hover:bg-primary/10 cursor-pointer'
            data-cy='sort-selection'
          >
            <div
              className='flex items-center gap-3'
              data-cy={
                sort.name === selected ? 'sort-selection-selected' : false
              }
            >
              <i data-cy='sort-selection-icon'>{sort.icon}</i>
              <p data-cy='sort-selection-title'>{sort.name}</p>
            </div>
            {sort.name === selected && <CheckIcon className='w-4 h-4' />}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
});

export { TodoSorter };
