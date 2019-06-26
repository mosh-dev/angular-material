import {Component, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material';

@Component({
  selector: 'app-notification-panel',
  templateUrl: './notification-panel.component.html',
  styleUrls: ['./notification-panel.component.scss']
})
export class NotificationPanelComponent {
  messages = [];

  @ViewChild(MatSidenav, {static: false}) sideNav: MatSidenav;

  toggle() {
    this.sideNav.toggle().then();
  }
}
