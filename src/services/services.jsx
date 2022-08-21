const BASE_URL = 'https://todo.api.devcode.gethired.id';
// const BASE_URL = 'http://localhost:8000';
const EMAIL = 'riqibrekele@gmail.com';

function useActivity() {
  const baseUrl = `${BASE_URL}/activity-groups`;

  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Cache-Control': 'no-cache',
  };

  const get = async () => {
    const res = await fetch(`${baseUrl}?email=${EMAIL}`);
    return await res.json();
  };

  const create = async (data) => {
    const res = await fetch(baseUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify(data),
    });

    return await res.json();
  };

  const remove = async (id) => {
    const res = await fetch(baseUrl + '/' + id, {
      method: 'DELETE',
      headers,
    });
    return await res.json();
  };

  const update = async (id, data) => {
    const res = await fetch(baseUrl + '/' + id, {
      method: 'PATCH',
      headers,
      body: JSON.stringify(data),
    });
    return await res.json();
  };

  return {
    get,
    create,
    remove,
    update,
  };
}

function useTodos() {
  const baseUrl = `${BASE_URL}/todo-items/`;

  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Cache-Control': 'no-cache',
  };

  const get = async (id) => {
    const res = await fetch(`${BASE_URL}/activity-groups/${id}`);
    return await res.json();
  };

  const create = async (data) => {
    const res = await fetch(baseUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify(data),
    });
    return await res.json();
  };

  const remove = async (id) => {
    const res = await fetch(baseUrl + id, {
      method: 'DELETE',
      headers,
    });
    return await res.json();
  };

  const update = async (id, data) => {
    const res = await fetch(baseUrl + id, {
      method: 'PATCH',
      headers,
      body: JSON.stringify(data),
    });
    return await res.json();
  };

  return {
    get,
    create,
    remove,
    update,
  };
}

export { useActivity, useTodos };
