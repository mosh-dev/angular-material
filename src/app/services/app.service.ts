import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {BreakpointObserver} from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  isMobile: Observable<boolean> = this.breakpointObserver
    .observe(['(max-width: 767px)'])
    .pipe(map(({matches}) => matches));

  constructor(private breakpointObserver: BreakpointObserver) {
  }
}
