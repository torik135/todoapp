import { Suspense, useEffect, useState, lazy } from 'react';
import { useParams } from 'react-router-dom';
import sorting from '../utils/sorting';
import { MdModeEdit as EditIcon } from 'react-icons/md';

import { useTodos, useActivity } from '../services/services';

import {
  Alert,
  ButtonAdd,
  ButtonBack,
  FormModal,
  ModalDelete,
  PageTitle,
  TodoItem,
  TodoSorter,
} from '../components';

const TodoEmpty = lazy(() => import('../components/todo/TodoEmpty'));

function Todo() {
  const [todos, setTodos] = useState([]);
  const [activityTitle, setActivityTitle] = useState('');
  const [editActivityTitle, setEditActivityTitle] = useState(false);
  const [editedTodo, setEditedTodo] = useState(null);

  const [sortType, setSortType] = useState('Terbaru');
  const [deleteTodoData, setDeleteTodoData] = useState(null);
  const [openFormModal, setOpenFormModal] = useState(false);
  const [alertMessage, setAlertMessage] = useState(null);

  const Todo = useTodos();
  const Activity = useActivity();
  let params = useParams();

  useEffect(() => {
    let isMounted = true;

    const getData = async () => {
      try {
        const data = await Todo.get(params.id);
        isMounted && setActivityTitle(data.title);
        isMounted && setTodos(data.todo_items);
      } catch (err) {
        console.log(err);
      }
    };

    getData();

    return () => {
      // setActivityTitle('');
      // setTodos([]);
      isMounted = false;
    };
  }, []);

  const changeSortBy = (value) => {
    setSortType(value);
    setTodos(sorting(todos, value));
  };

  const submitTodo = async (name, priority) => {
    const todoData = {
      activity_group_id: params.id,
      title: name,
      priority,
    };
    if (!!editedTodo) {
      const resdata = await Todo.update(editedTodo.id, todoData);
      const updatedTodo = todos.map((todo) =>
        todo.id === editedTodo.id ? resdata : todo,
      );
      setTodos(updatedTodo);
    } else {
      const data = await Todo.create({
        activity_group_id: params.id,
        title: name,
        priority,
      });
      //setTodos((todo) => [...todo]); // local
      setTodos((todo) => [data, ...todo]); // online
    }
    setOpenFormModal(false);
  };

  const openDeleteModal = (todo) => {
    setDeleteTodoData(todo);
  };

  const handleDeleteTodo = async () => {
    await Todo.remove(deleteTodoData.id);
    const newAc = todos.filter((todo) => todo.id !== deleteTodoData.id);
    setTodos(newAc);
    setDeleteTodoData(null);
    setAlertMessage('Todo berhasil dihapus');
  };

  const handleChangeIsActive = async (id, data) => {
    const resData = await Todo.update(id, data);
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, is_active: resData.is_active } : todo,
      ),
    );
  };

  const handleEditTodo = (todo) => {
    setEditedTodo(todo);
    setOpenFormModal(true);
  };

  const updateTitleActivity = async () => {
    const data = await Activity.update(params.id, { title: activityTitle });
    setActivityTitle(data.title);
    setEditActivityTitle(false);
  };

  return (
    <>
      <div className='flex items-center justify-between py-10'>
        <div className='flex items-center gap-3'>
          <ButtonBack />
          {!editActivityTitle ? (
            <PageTitle
              onClick={() => setEditActivityTitle(true)}
              dataCy='todo-title'
            >
              {activityTitle}
            </PageTitle>
          ) : (
            <input
              onBlur={updateTitleActivity}
              onInput={(e) => setActivityTitle(e.target.value)}
              type='text'
              autoFocus
              className='text-4xl font-bold bg-transparent focus:outline-none focus:border-b-2 border-black'
              value={activityTitle}
            />
          )}
          <button
            onClick={
              editActivityTitle
                ? updateTitleActivity
                : () => setEditActivityTitle(true)
            }
            data-cy='todo-title-edit-button'
          >
            <EditIcon className='w-7 h-7' />
          </button>
        </div>
        <div className='flex items-center gap-5'>
          <Suspense fallback={<div></div>}>
            <TodoSorter selected={sortType} getValue={changeSortBy} />
            <ButtonAdd
              onClick={() => setOpenFormModal(true)}
              dataCy='todo-add-button'
            />
          </Suspense>
        </div>
      </div>
      {todos?.length ? (
        <div>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onEdit={handleEditTodo}
              onDelete={openDeleteModal}
              onChangeIsActive={() =>
                handleChangeIsActive(todo.id, { is_active: !todo.is_active })
              }
            />
          ))}
        </div>
      ) : (
        <Suspense fallback={<div></div>}>
          <TodoEmpty />
        </Suspense>
      )}

      <FormModal
        isOpen={openFormModal}
        editedTodo={editedTodo}
        onClose={() => setOpenFormModal(false)}
        onSubmitTodo={submitTodo}
      />

      {!!deleteTodoData && (
        <ModalDelete
          data={deleteTodoData}
          onClose={() => setDeleteTodoData(null)}
          handleDelete={handleDeleteTodo}
        />
      )}

      <Alert message={alertMessage} onClose={() => setAlertMessage('')} />
    </>
  );
}

export { Todo };
