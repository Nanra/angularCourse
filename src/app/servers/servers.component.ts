import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  // selector: '[app-servers]', // Selector dijadikan atribut di dalam element HTML
  // selector: '.app-servers', // Selecter sebagai Class dalam HTML
  selector: 'app-servers', // Normal pakai selector model ini
  templateUrl: './servers.component.html', // Templete berasal dari file HTML (Normal Pakai ini)
  // Templete pakai element html langsung inline
  // template : `
  // <app-server></app-server>
  // <app-server></app-server>
  // <app-server></app-server>
  // `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  // Property for Binding
  allowNewServer = false;

  constructor() {
    setTimeout (() => {
      this.allowNewServer = true;
    }, 5000);
  }

  ngOnInit() {
  }

}
