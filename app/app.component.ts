import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/observable';

import { ScoreService } from './services/score.service';
import * as fromScoreActions from './store/actions';
import * as fromScoreSelectors from './store/selectors';
import { IScore } from './models/score.interface';

import { AppState } from './store'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  scores$: Observable<IScore[]>;
  name = 'ngrx';

  constructor(
    private scoreService: ScoreService
  ) {

  }

  ngOnInit() {
    // dispatch action
    this.scoreService.fetchScore();
    
    // select query
    this.scores$ = this.scoreService.getResultObservable();
  }
}
