import { Component, OnInit, Input } from '@angular/core';
import { GithubProfile } from 'src/app/models/GithubProfile';

@Component({
  selector: 'app-profile-stats',
  templateUrl: './profile-stats.component.html',
  styleUrls: ['./profile-stats.component.css']
})
export class ProfileStatsComponent implements OnInit {

  @Input() user: GithubProfile;

  constructor() { }

  ngOnInit() {
  }

}
