import { Component, OnInit, Input } from '@angular/core';
import { GithubProfile } from 'src/app/models/GithubProfile';

@Component({
  selector: 'app-profile-personal-information',
  templateUrl: './profile-personal-information.component.html',
  styleUrls: ['./profile-personal-information.component.css']
})
export class ProfilePersonalInformationComponent implements OnInit {

  @Input() user: GithubProfile;

  constructor() { }

  ngOnInit() {
  }

}
