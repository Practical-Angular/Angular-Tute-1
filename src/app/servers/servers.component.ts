import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit{
    allowNewServer = false;
    serverCreationStatus = 'No server was created!';
    serverName = 'Testserver';
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

    onUpdateServerName(event: Event) {
      this.serverName = (<HTMLInputElement>event.target).value;
    }
}
