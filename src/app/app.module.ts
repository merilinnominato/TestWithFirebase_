import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableTeamsComponent } from './components/table-teams/table-teams.component';
import { ResultsTeamComponent } from './components/results-team/results-team.component';
import { HeaderComponent } from './components/header/header.component';
import { FootballService } from './services/football.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TableTeamsComponent,
    ResultsTeamComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [FootballService],
  bootstrap: [AppComponent]
})
export class AppModule { }
