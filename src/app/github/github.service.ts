import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private client_id = '82b76b8c9e720b934b35';
  private client_secret = '682f8bd49900aef92ab07608fc9cd52dbd085216';

  constructor(
    private http: HttpClient
  ) { }

  getUser<T>({ username }: { username: string }) {
    return this
    .http
    .get<T>(`http://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
  }

  getRepos<T>({ username }: { username: string }) {
    return this
    .http
    .get<T>(`http://api.github.com/users/${username}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}`);
  }
}
