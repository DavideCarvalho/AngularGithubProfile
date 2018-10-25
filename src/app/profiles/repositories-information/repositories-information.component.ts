import { Component, OnInit, Input } from '@angular/core';
import { GithubRepos } from 'src/app/models/GithubProfile';

@Component({
  selector: 'app-repositories-information',
  templateUrl: './repositories-information.component.html',
  styleUrls: ['./repositories-information.component.css']
})
export class RepositoriesInformationComponent implements OnInit {

  @Input() repos: GithubRepos[];

  constructor() { }

  ngOnInit() {
  }

}
