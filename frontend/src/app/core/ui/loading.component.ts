import { Component } from '@angular/core';

@Component({
  selector: 'app-loading',
  template: '<img class="loading" src="/assets/images/progress.gif">',
  styles: [`
    .loading {
      display: block;
      margin: 0 auto;
    }
  `]
})
export class LoadingComponent { }
