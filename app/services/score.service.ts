import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import {IScore} from '../models/score.interface'
import { Store, select } from '@ngrx/store';
import { LoadScoreSuccess, LoadScoreFailed } from '../store';
import { AppState } from '../store';

@Injectable()
export class ScoreService {

  constructor(private http: Http, private store: Store<AppState>) { }

  fetchScore() {
    this.http.get('https://api.myjson.com/bins/s9p3l').subscribe({next: (result) => {
      const resultMapped = this.mapScores(result.json());
      this.store.dispatch(new LoadScoreSuccess(resultMapped));
    }, error: () => {
      this.store.dispatch(new LoadScoreFailed());
    }} );
  }

  mapScores(scoreData): IScore[] {
    return Object.keys(scoreData).map(key => {
      const score = scoreData[key];
      return { name: key, score: score.correct / score.total };
    });
  }
}