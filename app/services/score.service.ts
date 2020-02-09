import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import {IScore} from '../models/score.interface'

@Injectable()
export class ScoreService {

  constructor(private http: Http) { }

  fetchScore() {
    return this.http.get('https://api.myjson.com/bins/s9p3l');
  }

  mapScores(scoreData): IScore[] {
    return Object.keys(scoreData).map(key => {
      const score = scoreData[key];
      return { name: key, score: score.correct / score.total };
    });
  }

}