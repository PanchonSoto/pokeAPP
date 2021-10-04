import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
    `
    .container {
      margin: 10px;
    }

    mat-sidenav-container {
      background-color:#DCDCDC;
    }

    mat-sidenav {
    width: 300px;
    background-color: #D3D3D3;
    }
    .toolbar1 {
      background-color: #E0110D;
      color: #f2f2f2;
      display: flex;
      justify-content: space-between;
    }

    .toolbar2 {
      display: flex;
      justify-content: space-between;
    }
    `
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
