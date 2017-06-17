import { STORY } from '../const';

const initState = {};

export default (state = initState, action) => {
  switch (action.type) {
    case STORY:
      return {
        state: action.data,
      };
    default:
      return state;
  }
};
