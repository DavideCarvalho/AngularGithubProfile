import { Component, OnInit, Input } from '@angular/core';
import { GithubRepos } from 'src/app/models/GithubProfile';

@Component({
  selector: 'app-repository-card',
  templateUrl: './repository-card.component.html',
  styleUrls: ['./repository-card.component.css']
})
export class RepositoryCardComponent implements OnInit {

  @Input() repo: GithubRepos;

  constructor() { }

  ngOnInit() {
  }

}
