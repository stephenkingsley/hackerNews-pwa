export const getData = (type, page) =>
  dispatch => {
    fetch(`https://node-hnapi.herokuapp.com/${type}?page=${page}`)
      .then(res => res.json())
      .then(data => {
        dispatch(receiveData(`${type.toUpperCase()}_LIST`, data));
      })
  };

const receiveData = (type, data) => {
  return {
    type, data,
  }
};
