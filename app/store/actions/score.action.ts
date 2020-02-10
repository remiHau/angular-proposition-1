import { Action } from '@ngrx/store';

import {IScore} from '../../models/score.interface';

export const LOAD_SCORE = '[Score] Load Score';


export class LoadScore implements Action {
  readonly type = LOAD_SCORE;

  constructor( public payload: IScore[] ){}
}

export type ScoreAction
  = LOAD_SCORE;