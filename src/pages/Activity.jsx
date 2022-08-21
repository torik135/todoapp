import { lazy, Suspense, useEffect, useState } from 'react';
import { useActivity } from '../services/services';
import { ModalDelete, Alert, ActivityCard, ButtonAdd } from '../components';

const ActivityEmpty = lazy(() =>
  import('../components/activity/ActivityEmpty'),
);

function Activity() {
  const [activity, setActivity] = useState([]);
  const [deleteActivityData, setDeleteActivityData] = useState(null);
  const [alertMessage, setAlertMessage] = useState(null);
  const Activity = useActivity();

  useEffect(async () => {
    try {
      await getActivity();
    } catch (err) {
      console.log(err);
    }
    return () => setActivity([]);
  }, []);

  const getActivity = async () => {
    const data = await Activity.get();
    // setActivity(data.data); //online
    setActivity(data);

  };

  const createActivity = async () => {
    await Activity.create({
      title: 'New Activity',
      email: 'riqibrekele@gmail.com',
    });
    getActivity();
  };

  const openDeleteModal = (e, ac) => {
    e.preventDefault();
    e.stopPropagation();
    setDeleteActivityData(ac);
  };

  const handleDeleteActivity = async () => {
    await Activity.remove(deleteActivityData.id);
    const newAc = activity.filter((ac) => ac.id !== deleteActivityData.id);
    setActivity(newAc);
    setDeleteActivityData(null);
    setAlertMessage('Activity berhasil dihapus');
  };

  return (
    <>
      <div className='flex items-center justify-between py-10'>
        <h1 className='text-4xl font-bold' data-cy='activity-title'>
          Activity
        </h1>
        <Suspense fallback={<div></div>}>
          <ButtonAdd onClick={createActivity} dataCy='activity-add-button' />
        </Suspense>
      </div>
      {activity?.length ? (
        <div className='grid gap-3 pb-10 grid-cols-4'>
          {activity.map((ac, index) => (
            <ActivityCard
              key={Math.random()}
              index={index}
              onDelete={(e) => openDeleteModal(e, ac)}
              {...ac}
            />
          ))}
        </div>
      ) : (
        <Suspense fallback={<div></div>}>
          <ActivityEmpty />
        </Suspense>
      )}

      {deleteActivityData && (
        <ModalDelete
          data={deleteActivityData}
          onClose={() => setDeleteActivityData(null)}
          handleDelete={handleDeleteActivity}
        />
      )}

      <Alert message={alertMessage} onClose={() => setAlertMessage('')} />
    </>
  );
}

export { Activity };
