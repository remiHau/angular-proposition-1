import { Action } from '@ngrx/store';

import {IScore} from '../../models/score.interface';

export const LOAD_SCORE = '[Score] Load Score';
export const LOAD_SCORE_SUCCESS = '[Score] Load Score Success';
export const LOAD_SCORE_FAIL = '[Score] Load Score Fail';


export class LoadScore implements Action {
  readonly type = LOAD_SCORE;
}

export class LoadScoreSuccess implements Action {
  readonly type = LOAD_SCORE_SUCCESS;

  constructor( public payload: IScore[] ){}
}

export class LoadScoreFail implements Action {
  readonly type = LOAD_SCORE_FAIL;
}

export type ScoreAction
  = LoadScore
  | LoadScoreSuccess
  | LoadScoreFail;