import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileInformationComponent } from './profile-information.component';
import { ProfileStatsComponent } from './profile-stats/profile-stats.component';
import { ProfilePersonalInformationComponent } from './profile-personal-information/profile-personal-information.component';

describe('ProfileInformationComponent', () => {
  let component: ProfileInformationComponent;
  let fixture: ComponentFixture<ProfileInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProfileInformationComponent,
        ProfileStatsComponent,
        ProfilePersonalInformationComponent,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileInformationComponent);
    component = fixture.componentInstance;
    component.user = ({
      name: 'DavideCarvalho'
    } as any);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
