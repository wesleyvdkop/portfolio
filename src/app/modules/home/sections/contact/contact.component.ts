import {
  Component
} from '@angular/core';

@Component({
  selector: 'wk-section-contact',
  templateUrl: './contact.component.html'
})

export class SectionContactComponent {

  /**
   * Every socialmedia by name, link
   */
  public socialmedia = [
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/wesley-van-der-kop-571951101'
    },
    {
      name: 'Github',
      link: 'https://github.com/wesleyvdkop'
    },
    {
      name: 'Stack Overflow',
      link: 'https://stackoverflow.com/users/7063364/wesley-van-der-kop'
    },
    {
      name: 'Dribbble',
      link: 'https://dribbble.com/wesleyvdkop'
    }
  ];
}
