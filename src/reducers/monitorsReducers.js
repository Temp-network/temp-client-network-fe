import { FETCH_MONITOR_LOADING, FETCH_MONITOR } from '../actions/monitorActions';

const initialState = {
  monitors: [],
  loading: false,
  error: null
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_MONITOR_LOADING:
      return { ...state, loading: true };
    case FETCH_MONITOR:
      return { ...state, images: action.payload, loading: false };    default: 
      return state;
  }
}

