import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePersonalInformationComponent } from './profile-personal-information.component';

describe('ProfilePersonalInformationComponent', () => {
  let component: ProfilePersonalInformationComponent;
  let fixture: ComponentFixture<ProfilePersonalInformationComponent>;
  const date = new Date().toLocaleDateString();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilePersonalInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePersonalInformationComponent);
    component = fixture.componentInstance;
    component.user = ({
      login: 'DavideCarvalho',
      location: 'Santos',
      email: 'teste@teste.com',
      blog: '',
      ['created_at']: date,
    } as any);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show @input at html', () => {
    const [
      loginElement,
      locationElement,
      emailElement,
      blogElement,
      createdAtElement
    ] = fixture.debugElement.nativeElement.querySelectorAll('li.list-group-item');
    expect(loginElement.textContent).toBe('Username: DavideCarvalho');
    expect(locationElement.textContent).toBe('Location: Santos');
    expect(emailElement.textContent).toBe('Email: teste@teste.com');
    expect(blogElement.textContent).toBe('Blog: ');
    expect(createdAtElement.textContent).toBe(`Member Since: ${date}`);
  });
});
