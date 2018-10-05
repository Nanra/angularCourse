import { Component } from '@angular/core';

@Component({
    selector : 'app-server',
    templateUrl : '../server/server.component.html'

})
export class ServerComponent {

  // Var for Interpolation Binding
  serverID: Number = 7;
  serverStatus: String = 'Active';

  // Method for status server
  getServerStatus() {
    return this.serverStatus;
  }
}
