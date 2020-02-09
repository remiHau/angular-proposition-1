import { createSelector } from 'reselect';

import { AppState } from '../reducers';

export const getScoreState = (state: AppState) => {
  return state.score;
}

export const getScore = createSelector(getScoreState, (scoreState) => {
  if (scoreState == null) {
    return null;
  }

  return scoreState.data;
});