import {Component, Input, OnInit} from '@angular/core';
import {MatSidenav} from '@angular/material';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() sidenav: MatSidenav;
  @Input() notificationPanel: MatSidenav;

  constructor() {
  }

  ngOnInit() {
  }

  toggle(nav: MatSidenav) {
    nav.toggle().then();
  }

}
