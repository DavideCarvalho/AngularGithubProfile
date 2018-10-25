import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilesComponent } from './profiles.component';
import { of } from 'rxjs';
import { GithubService } from '../github/github.service';
import { By } from '@angular/platform-browser';
import { ProfileInformationComponent } from './profile-information/profile-information.component';
import { RepositoriesInformationComponent } from './repositories-information/repositories-information.component';
import { ProfileStatsComponent } from './profile-information/profile-stats/profile-stats.component';
import { ProfilePersonalInformationComponent } from './profile-information/profile-personal-information/profile-personal-information.component';
import { RepositoryCardComponent } from './repositories-information/repository-card/repository-card.component';

describe('ProfilesComponent', () => {
  let component: ProfilesComponent;
  let fixture: ComponentFixture<ProfilesComponent>;

  const githubServiceMock = {
    getUser: (x: string) => {
      return of({});
    },
    getRepos: (x: string) => {
      return of([]);
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProfilesComponent,
        ProfileInformationComponent,
        RepositoriesInformationComponent,
        ProfileStatsComponent,
        ProfilePersonalInformationComponent,
        RepositoryCardComponent,
      ],
      providers: [
        {
          provide: GithubService,
          useValue: githubServiceMock
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set username as "Davi de Carvalho" on ngOnInit', () => {
    fixture = TestBed.createComponent(ProfilesComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    expect(component.username).toBe('DavideCarvalho');
  });

  it('should update username input textContent if username on component is changed', () => {
    fixture = TestBed.createComponent(ProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.username = 'adriancole';
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('input')).nativeElement.value).toBe('adriancole');
  });

  it('should update input value if keyup event is fired', () => {
    fixture = TestBed.createComponent(ProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const input = fixture.debugElement.query(By.css('input'));
    input.triggerEventHandler('keyup', { target: { value: 'adriancole' }} );
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('input')).nativeElement.value).toBe('adriancole');
  });

  it('should update username variable inside component if keyup is fired', () => {
    fixture = TestBed.createComponent(ProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const input = fixture.debugElement.query(By.css('input'));
    input.triggerEventHandler('keyup', { target: { value: 'adriancole' }} );
    fixture.detectChanges();
    expect(component.username).toBe('adriancole');
  });
});
