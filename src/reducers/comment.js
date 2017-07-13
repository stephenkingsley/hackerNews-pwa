import { NEWS_LIST, SHOW_LIST, ASK_LIST, NEWEST_LIST, JOBS_LIST } from '../const';

const initState = {
  news: [],
  show: [],
  ask: [],
  newest: [],
  jobs: [],
};

export default (state = initState, action) => {
  switch (action.type) {
    case NEWS_LIST:
      return {
        ...state,
        news: action.data,
      };
    case SHOW_LIST:
      return {
        ...state,
        show: action.data,
      };
    case ASK_LIST:
      return {
        ...state,
        ask: action.data,
      };
    case NEWEST_LIST:
      return {
        ...state,
        newest: action.data,
      };
    case JOBS_LIST:
      return {
        ...state,
        jobs: action.data,
      };
    default:
      return state;
  }
};
