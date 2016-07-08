import {
  UPDATE_LAYOUT
} from '../constants/actionTypes';

type appStateType = {
    layout: {width: number, height: number},
}

const initialState = {
    layout: {
        width: 1024,
        height: 768
    },
};

export default function appState(state : appStateType = initialState, action : Object = {}) : appStateType {
  console.log(action.type);
  switch (action.type) {
    case UPDATE_LAYOUT:
      return {
        ...state,
        layout: action.layout,
      };
    default:
      return state;
  }
}
