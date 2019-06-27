import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material';
import {sideNavMenuItems} from './sideNav';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  @ViewChild(MatSidenav, {static: false}) sideNav: MatSidenav;

  menus = sideNavMenuItems;

  constructor() {
  }

  ngOnInit() {
  }

}
