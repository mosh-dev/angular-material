import { Component, OnInit } from '@angular/core';
import {MENU_ITEMS} from './pages-menu';

@Component({
  selector: 'app-nebular',
  templateUrl: './nebular.component.html',
  styleUrls: ['./nebular.component.scss']
})
export class NebularComponent implements OnInit {
  menu = MENU_ITEMS;

  constructor() { }

  ngOnInit() {
  }

}
