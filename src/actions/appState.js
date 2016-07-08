import * as types from '../constants/actionTypes';
import type { Thunk } from 'redux';

type layout = {width: number, height: number}

export function updateLayout(layout: layout) : Thunk {
    return (dispatch, getState) => {
        const oldLayout = getState().appState.layout;
        if (oldLayout.width !== layout.width || oldLayout.height !== layout.height) {
            return dispatch({ type: types.UPDATE_LAYOUT, layout });
        }
        return Promise.resolve();
    };
}
