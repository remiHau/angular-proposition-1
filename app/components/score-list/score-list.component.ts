import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { IScore } from '../../models/score.interface';

@Component({
  selector: 'score-list',
  templateUrl: './score-list.component.html',
  styleUrls: ['./score-list.component.css']
})
export class ScoreListComponent implements OnInit {
  @Input() scores: IScore[];

  constructor() { }

  ngOnInit() { }
}