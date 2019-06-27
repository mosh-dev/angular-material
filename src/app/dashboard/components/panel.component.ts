import {Component} from '@angular/core';
import {AppService} from '../../services/app.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent {

  constructor(private appService: AppService) {
  }

  get isMobile(): Observable<boolean> {
    return this.appService.isMobile;
  }

}
