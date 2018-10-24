import { Component, OnInit, OnDestroy } from '@angular/core';
import { GithubService } from '../github/github.service';
import { GithubProfile, GithubRepos } from '../models/GithubProfile';
import { Subject, timer, forkJoin } from 'rxjs';
import { debounce, switchMap, tap, retry } from 'rxjs/operators';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit, OnDestroy {

  private user: GithubProfile;
  private repos: GithubRepos[];
  private username = '';
  private unsubscribe$: Subject<boolean> = new Subject();
  public username$: Subject<string> = new Subject();

  constructor(
    private githubService: GithubService
  ) { }

  ngOnInit() {
    this.username$
    .pipe(
      tap((username) => this.username = username),
      debounce(() => timer(200)),
      switchMap((username: string) => forkJoin([
        this.githubService.getUser<GithubProfile>({ username }),
        this.githubService.getRepos<GithubRepos[]>({ username })
      ])),
      retry()
    )
    .subscribe(([user, repos]) => {
      this.user = user;
      this.repos = repos;
    });
    this.username$.next('DavideCarvalho');
  }

  ngOnDestroy() {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }

}
