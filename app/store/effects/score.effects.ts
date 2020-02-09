import { Injectable } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { mergeMap, map, catchError } from 'rxjs/operators';

import { ScoreService } from '../../services/score.service';

import {
  AppState,
  LOAD_SCORE,
  LoadScoreSuccess,
  LoadScoreFail
} from '..';

@Injectable()
export class ScoreEffects {
  constructor(
    private action$: Actions,
    private store: Store<AppState>,
    private scoreService: ScoreService
  ) {}

  @Effect()
  getScoreEffect$: Observable<Action> = this.action$
    .pipe(
      ofType(LOAD_SCORE),
      mergeMap(()=>{
        return this.scoreService.fetchScore()
          .pipe(
            map(scores => {
              const mappedScores = this.scoreService.mapScores(scores.json());
              return new LoadScoreSuccess(mappedScores);
            }),
            catchError(error=>of(new LoadScoreFail()))
          )
      })
    )
}