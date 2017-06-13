import { NEWS_LIST, SHOW_LIST, ASK_LIST } from '../const';

const initState = {
  news: [],
  show: [],
  ask: [],
};

export default (state = initState, action) => {
  switch (action.type) {
    case NEWS_LIST:
      return {
        ...state,
        news: state.news.concat(action.data),
      };
    case SHOW_LIST:
      return {
        ...state,
        show: state.show.concat(action.data),
      };
    case ASK_LIST:
      return {
        ...state,
        ask: state.ask.concat(action.data),
      };
    default:
      return state;
  }
};
