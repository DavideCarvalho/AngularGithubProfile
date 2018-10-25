import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoryCardComponent } from './repository-card.component';
import { By } from '@angular/platform-browser';

describe('RepositoryCardComponent', () => {
  let component: RepositoryCardComponent;
  let fixture: ComponentFixture<RepositoryCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepositoryCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoryCardComponent);
    component = fixture.componentInstance;
    const repo: any = {
      watchers: 1,
      name: 'teste',
      description: 'a description test',
      forks: 2,
      ['html_url']: 'https://google.com'
    };
    component.repo = repo;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show @input on html', () => {
    expect(fixture.debugElement.query(By.css('p')).nativeElement.textContent).toBe('a description test');
    expect(fixture.debugElement.query(By.css('span.badge.badge-default')).nativeElement.textContent).toBe('1 Watchers');
    expect(fixture.debugElement.query(By.css('span.badge.badge-primary')).nativeElement.textContent).toBe('2 Forks');
    expect(fixture.debugElement.query(By.css('a')).nativeElement.textContent).toBe('teste');
    expect(fixture.debugElement.query(By.css('a')).nativeElement.getAttribute('href')).toBe('https://google.com');
  });
});
