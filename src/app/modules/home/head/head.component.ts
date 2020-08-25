import { AfterViewInit, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'wk-head',
  templateUrl: './head.component.html'
})

export class HeadComponent implements AfterViewInit {
  public currentLanguage: string = 'en';

  constructor(
    public translateService: TranslateService
  ) {
  }

  public ngAfterViewInit(): void  {
    setTimeout(() => {
      this.currentLanguage = this.translateService.currentLang;
    });
  }

  public switchLanguage(language: string) {
    this.translateService.use(language);
    this.currentLanguage = language;
  }
}
