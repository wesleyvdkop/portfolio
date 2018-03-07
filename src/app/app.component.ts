import {
  Component,
  ViewEncapsulation
} from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html'
})

export class AppComponent {
  constructor(
    translateService: TranslateService
  ) {
    // Default lang
    translateService.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translateService.use('nl');
  }
}
