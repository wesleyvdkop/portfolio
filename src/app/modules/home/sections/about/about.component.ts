import {
  Component
} from '@angular/core';

@Component({
  selector: 'wk-section-about',
  templateUrl: './about.component.html'
})

export class SectionAboutComponent {

  /**
   * Every text for about me
   */
  public texts = [
    {
      translationKey: 'INFO--FIRST'
    },
    {
      translationKey: 'INFO--SECOND'
    },
    {
      translationKey: 'INFO--THIRD'
    }
  ];
}
