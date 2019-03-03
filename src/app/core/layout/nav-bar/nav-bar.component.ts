import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styles: []
})
export class NavBarComponent implements OnInit {
  marca = environment.marca;
  logo = environment.logo;

  constructor() { }

  ngOnInit() {
  }

}
