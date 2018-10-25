import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoriesInformationComponent } from './repositories-information.component';
import { RepositoryCardComponent } from './repository-card/repository-card.component';

describe('RepositoriesInformationComponent', () => {
  let component: RepositoriesInformationComponent;
  let fixture: ComponentFixture<RepositoriesInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RepositoriesInformationComponent,
        RepositoryCardComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoriesInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
