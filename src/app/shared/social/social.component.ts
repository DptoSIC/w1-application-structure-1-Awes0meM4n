import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styles: []
})
export class SocialComponent implements OnInit {
  twitter = environment.twitter;
  facebook = environment.facebook;

  constructor() { }

  ngOnInit() {
  }

}
