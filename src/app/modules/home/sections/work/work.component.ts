import {
  Component
} from '@angular/core';

@Component({
  selector: 'wk-section-work',
  templateUrl: './work.component.html'
})

export class SectionWorkComponent {

  public hover = false;

  /**
   * Every job by name, link, translationKeyTitle, translationKeyTime
   */
  public jobs = [
    {
      name: 'Respond',
      link: 'https://respond.nl',
      translationKeyTitle: 'RESPOND.TITLE',
      translationKeyTime: 'RESPOND.TIME'
    },
    {
      name: 'Mediamonks',
      link: 'https://mediamonks.com',
      translationKeyTitle: 'MEDIAMONKS.TITLE',
      translationKeyTime: 'MEDIAMONKS.TIME'
    }
  ];

  /**
   * Every project by name, link
   */
  // public projects = [
  //   {
  //     name: 'Project',
  //     link: 'https://wesleyvanderkop.com'
  //   },
  //   {
  //     name: 'Project',
  //     link: 'https://wesleyvanderkop.com'
  //   },
  //   {
  //     name: 'Project',
  //     link: 'https://wesleyvanderkop.com'
  //   },
  //   {
  //     name: 'Project',
  //     link: 'https://wesleyvanderkop.com'
  //   },
  //   {
  //     name: 'Project',
  //     link: 'https://wesleyvanderkop.com'
  //   }
  // ];
}
