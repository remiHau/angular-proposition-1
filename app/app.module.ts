import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ScoreService } from './services/score.service';

import {reducers, effects} from './store';
import { ScoreListComponent } from './components/score-list/score-list.component'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.forRoot(reducers, {}),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument({ maxAge: 50 })
  ],
  declarations: [AppComponent, HelloComponent, ProfileComponent, ScoreListComponent],
  bootstrap: [AppComponent],
  providers: [ScoreService]
})
export class AppModule { }
