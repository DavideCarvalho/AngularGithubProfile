import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ProfileInformationComponent } from './profiles/profile-information/profile-information.component';
import { RepositoriesInformationComponent } from './profiles/repositories-information/repositories-information.component';
import { ProfileStatsComponent } from './profiles/profile-information/profile-stats/profile-stats.component';
import { ProfilePersonalInformationComponent } from './profiles/profile-information/profile-personal-information/profile-personal-information.component';
import { RepositoryCardComponent } from './profiles/repositories-information/repository-card/repository-card.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ProfilesComponent,
        ProfileInformationComponent,
        RepositoriesInformationComponent,
        ProfileStatsComponent,
        ProfilePersonalInformationComponent,
        RepositoryCardComponent,
      ],
      imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render "Github Search" on a tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('a').textContent).toContain('Github Search');
  });
});
