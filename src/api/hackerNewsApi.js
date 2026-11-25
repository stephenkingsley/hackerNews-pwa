const BASE_URL = 'https://node-hnapi.herokuapp.com';

export const getData = async (type, page) => {
  const res = await fetch(`${BASE_URL}/${type}?page=${page}`);
  return res.json();
};

export const getItem = async (id) => {
  const res = await fetch(`${BASE_URL}/item/${id}`);
  return res.json();
};

export default { getData, getItem };
