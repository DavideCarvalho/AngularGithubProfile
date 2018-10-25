import { TestBed } from '@angular/core/testing';

import { GithubService } from './github.service';

describe('GithubService', () => {
  const httpMock = jasmine.createSpyObj('http', ['get']);
  const githubService: GithubService = new GithubService(httpMock);
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    expect(githubService).toBeTruthy();
  });
});
