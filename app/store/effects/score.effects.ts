import { Injectable } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { mergeMap, map, catchError } from 'rxjs/operators';


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
    private store: Store<AppState>
  ) {}
}