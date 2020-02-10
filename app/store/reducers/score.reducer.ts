import * as fromScore from '../actions/score.action';

import { IScore } from '../../models/score.interface';

export interface ScoreState {
  data: IScore[];
  loading: boolean;
  loaded: boolean;
}

export const initialState = {
  data: [],
  loading: false,
  loaded: false
}

export function reducer(
  state = initialState,
  action: fromScore.ScoreAction
): ScoreState {
  switch(action.type) {
    case fromScore.LOAD_SCORE: {
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.payload
      }
    }
  
  }

  return state;
}