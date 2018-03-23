import {
  Component, AfterViewInit
} from '@angular/core';

import { ScrollSpyModule, ScrollSpyService } from 'ng2-scrollspy';

@Component({
  selector: 'wk-head',
  templateUrl: './head.component.html'
})

export class HeadComponent {

  // constructor (
  //   private scrollSpyService: ScrollSpyService
  // ) {}
  //
  // ngAfterViewInit() {
  //   this.scrollSpyService.getObservable('window').subscribe((e: any) => {
  //     console.log('ScrollSpy::window: ', e);
  //   });
  // }
}
