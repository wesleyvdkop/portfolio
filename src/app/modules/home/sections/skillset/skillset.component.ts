import {
  Component, Input
} from '@angular/core';

@Component({
  selector: 'wk-section-skillset',
  templateUrl: './skillset.component.html'
})

export class SectionSkillsetComponent {

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
