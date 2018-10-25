import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileStatsComponent } from './profile-stats.component';

describe('ProfileStatsComponent', () => {
  let component: ProfileStatsComponent;
  let fixture: ComponentFixture<ProfileStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileStatsComponent);
    component = fixture.componentInstance;
    component.user = ({
      ['public_repos']: 45,
      ['public_gists']: 23,
      followers: 1,
      following: 3,
    }as any);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show @input on html', () => {
    const publicReposElement = fixture.debugElement.nativeElement.querySelector('span.badge.badge-default');
    const publicGistsElement = fixture.debugElement.nativeElement.querySelector('span.badge.badge-primary');
    const followersElement = fixture.debugElement.nativeElement.querySelector('span.badge.badge-success');
    const followingElement = fixture.debugElement.nativeElement.querySelector('span.badge.badge-info');
    expect(publicReposElement.textContent).toBe('45 Public Repos');
    expect(publicGistsElement.textContent).toBe('23 Public Gists');
    expect(followersElement.textContent).toBe('1 Followers');
    expect(followingElement.textContent).toBe('3 Following');
  });
});
