import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', // selector by element (tag)
  // selector: '[app-servers]', // selector by cutom attribute
  // selector: '.app-servers', // selector by css class
  templateUrl: './servers.component.html'
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
