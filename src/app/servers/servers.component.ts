import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', // selector by element (tag)
  // selector: '[app-servers]', // selector by cutom attribute
  // selector: '.app-servers', // selector by css class
  templateUrl: './servers.component.html'
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Test server';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = `Server was created! Name is ${this.serverName}`;
  }

  onUpdateServerName(event: Event) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
