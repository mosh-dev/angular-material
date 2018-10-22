import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {DataService} from '../services/data.service';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  menus;
  messages;

  constructor(
    private dataService: DataService,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher
  ) {
    this.menus = this.dataService.getMenuData();
    this.messages = this.dataService.getMessages();

    this.mobileQuery = media.matchMedia('(max-width: 800px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }


  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
