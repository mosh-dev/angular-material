import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatSidenav} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() sidenav: MatSidenav;
  @Input() notificationPanel: MatSidenav;

  @Output() toggleColor = new EventEmitter();

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  toggle(nav: MatSidenav) {
    nav.toggle().then();
  }

  logout() {
    this.router.navigate(['/login']).then();
  }

}
