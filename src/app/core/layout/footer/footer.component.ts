import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent implements OnInit {
  marca = environment.marca;
  webMarca = environment.webMarca;

  constructor() { }

  ngOnInit() {
  }

}
