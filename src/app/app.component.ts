// Core
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';

// Ngx
import { TranslateService } from '@ngx-translate/core';

// Rxjs
import { merge, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'iwdf-root',
  template: `
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnDestroy, OnInit {
  private subscription: Subscription = new Subscription();
  constructor(
    private router: Router,
    private titleService: Title,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    console.log(this.titleService);
    const metaTitle = this.titleService.getTitle();
    const onNavigationEnd = this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    );

    this.subscription.add(
      merge(this.translateService.onLangChange, onNavigationEnd)
        .pipe(
          map(() => {
            let lastChild = this.router.routerState.snapshot.root;
            while (lastChild.children.length) {
              lastChild = lastChild.children[0];
            }
            return lastChild;
          })
        )
        .subscribe((lastChild) => {
          if ('data' in lastChild) {
            const { title } = lastChild.data;
            if (title) {
              const i18nTitle = `${metaTitle} - ${this.translateService.instant(
                title
              )}`;
              this.titleService.setTitle(i18nTitle);
            }
          }
        })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
