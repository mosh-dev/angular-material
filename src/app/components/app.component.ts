import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';
import {filter, tap} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  navigating = true;

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => (event instanceof NavigationStart) || (event instanceof NavigationEnd)),
      tap(event => this.navigating = (event instanceof NavigationStart))
    ).subscribe();
  }

  ngOnInit(): void {
  }
}
