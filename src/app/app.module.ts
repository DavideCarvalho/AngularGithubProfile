import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { ProfileInformationComponent } from './profiles/profile-information/profile-information.component';
import { ProfileStatsComponent } from './profiles/profile-information/profile-stats/profile-stats.component';
import { ProfilePersonalInformationComponent } from './profiles/profile-information/profile-personal-information/profile-personal-information.component';
import { RepositoriesInformationComponent } from './profiles/repositories-information/repositories-information.component';
import { RepositoryCardComponent } from './profiles/repositories-information/repository-card/repository-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfilesComponent,
    ProfileInformationComponent,
    ProfileStatsComponent,
    ProfilePersonalInformationComponent,
    RepositoriesInformationComponent,
    RepositoryCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
