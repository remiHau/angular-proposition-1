import { ActionReducerMap } from '@ngrx/store';
import * as fromScore from './score.reducer';

export interface AppState {
  score: fromScore.ScoreState
}

export const reducers: ActionReducerMap<AppState> = {
  score: fromScore.reducer
}
