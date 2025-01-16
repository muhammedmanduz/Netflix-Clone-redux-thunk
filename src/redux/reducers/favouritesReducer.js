import ActionTypes from "../actionTypes";

const initialState = {
  favorites: [],
  isLoading: true,
  error: null,
};

const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FAV_LOADING:
      return { ...state, isLoading: true };

    case ActionTypes.FAV_ERROR:
      return { ...state, isLoading: false, error: action.payload };

    case ActionTypes.FAV_SUCCESS:
      return { isLoading: false, error: null, favorites: action.payload };

    case ActionTypes.ADD_TO_FAV:
      return { ...state, favorites: state.favorites.concat(action.payload) };

    case ActionTypes.REMOVE_FAV:
      const filter = state.favorites.filter((i) => i.d !== action.payload.id);
      return { ...state, favorites: filter };

    default:
      return state;
  }
};

export default favouritesReducer;
