import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
    allowNewServer = false;
    serverCreationStatus = 'No server was created!';
    constructor() {
      setTimeout(() => {
        this.allowNewServer = true;
      }, 2000);
    }

    ngOnInit(){
      // TODO document why this method 'ngOnInit' is empty
    }

    onCreateServer() {
      this.serverCreationStatus = 'Server was created!';
    }
}
