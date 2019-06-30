import {Component, OnInit} from '@angular/core';
import {AppService} from '../../services/app.service';
import {Observable} from 'rxjs';
import {OverlayContainer} from '@angular/cdk/overlay';
import {LocalStorageKeys, MaterialThemes} from '../../app';
import {LocalStorageService} from '../../storage-classes/localStorage';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  // activeTheme = LocalStorageService.getItem(LocalStorageKeys.activeTheme) || MaterialThemes.LIGHT;
  activeTheme = '';

  constructor(
    private appService: AppService,
    private overlayContainer: OverlayContainer
  ) {
  }

  get isMobile(): Observable<boolean> {
    return this.appService.isMobile;
  }


  toggleColor() {
    // this.overlayContainer.getContainerElement().classList.remove(this.activeTheme);
    // this.activeTheme = (this.activeTheme === MaterialThemes.LIGHT) ? MaterialThemes.DARK : MaterialThemes.LIGHT;
    // this.updateTheme();
    // LocalStorageService.setItem(LocalStorageKeys.activeTheme, this.activeTheme);
  }

  private updateTheme() {
    // this.overlayContainer.getContainerElement().classList.add(this.activeTheme);
  }

  ngOnInit(): void {
    this.updateTheme();

  }

}
