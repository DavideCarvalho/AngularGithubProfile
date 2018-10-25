import { Component, OnInit, Input } from '@angular/core';
import { GithubProfile } from 'src/app/models/GithubProfile';

@Component({
  selector: 'app-profile-information',
  templateUrl: './profile-information.component.html',
  styleUrls: ['./profile-information.component.css']
})
export class ProfileInformationComponent implements OnInit {

  @Input() user: GithubProfile;

  constructor() { }

  ngOnInit() {
  }

}
