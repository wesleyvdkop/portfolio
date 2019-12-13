import {
  AfterViewInit,
  Component, Inject,
  ViewEncapsulation
} from '@angular/core';
import { LOCAL_STORAGE } from '@ng-toolkit/universal';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit {

  /**
   * @param {TranslateService} translateService
   * @param localStorage
   */
  constructor(
    private translateService: TranslateService,
  ) {
  }

  /**
   * After View init
   */
  public ngAfterViewInit(): void {
    // this language will be used as a fallback when a translation isn't found in the current language
    this.translateService.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this.translateService.use('en');
  }
}
