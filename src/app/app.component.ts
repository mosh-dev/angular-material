import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Compiler,
  Component,
  Injector,
  NgModuleRef,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChildren
} from '@angular/core';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';
import {filter, tap} from 'rxjs/operators';
import {LoginComponent} from './auth/components/login/login.component';
import {HostDirective} from './host.directive';
import {AuthModule} from './auth/auth.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnDestroy, OnInit, AfterViewInit {
  navigating = true;
  moduleRef: NgModuleRef<AuthModule>;

  @ViewChildren(HostDirective) hosts: QueryList<HostDirective>;

  constructor(
    private router: Router,
    private compiler: Compiler,
    private injector: Injector,
    private cdr: ChangeDetectorRef
  ) {

    this.router.events.pipe(
      filter(event => (event instanceof NavigationStart) || (event instanceof NavigationEnd)),
      tap(event => this.navigating = (event instanceof NavigationStart))
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.moduleRef.destroy();
  }

  ngOnInit(): void {
  }

  loadAuthComponent(host) {
    import('./auth/auth.module')
      .then(m => m.AuthModule)
      .then((authModule: any) => this.compiler.compileModuleAsync(authModule))
      .then(ngModuleFactory => {
        this.moduleRef = ngModuleFactory.create(this.injector);
        const componentFactory = this.moduleRef.componentFactoryResolver.resolveComponentFactory(LoginComponent);
        host.viewContainerRef.createComponent(componentFactory);
        this.cdr.detectChanges();
      });
  }

  ngAfterViewInit(): void {
    const loginHost = this.hosts
      .toArray()
      .find(host => host.name === 'login');
    if (loginHost) {
      this.loadAuthComponent(loginHost);
    }
  }
}
