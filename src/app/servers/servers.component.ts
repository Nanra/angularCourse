import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-servers]', // Selector dijadikan atribut di dalam element HTML
  // selector: 'app-servers', // Normal pakai selector model ini
  // templateUrl: './servers.component.html', // Templete berasal dari file HTML (Normal Pakai ini)
  // Templete pakai element html langsung inline
  template : `
  <app-server></app-server>
  <app-server></app-server>
  <app-server></app-server>
  `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
