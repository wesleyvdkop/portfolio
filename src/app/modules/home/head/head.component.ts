import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef
} from '@angular/core';

import anime from 'animejs';
import { ScrollSpyModule, ScrollSpyService } from 'ng2-scrollspy';

@Component({
  selector: 'wk-head',
  templateUrl: './head.component.html'
})

export class HeadComponent implements AfterViewInit {

  @ViewChild('scene') private scene: ElementRef;

  // constructor (
  //   private scrollSpyService: ScrollSpyService
  // ) {}

  public ngAfterViewInit() {
    const paths = this.scene.nativeElement.children;

    Array.prototype.forEach.call(paths, child => {
      setTimeout(() => {
        anime({
          targets: child,
          duration: anime.random(3000, 5000),
          easing: [0.5, 0, 0.5, 1],
          d: child.getAttribute('pathdata:id'),
          loop: true,
          direction: 'alternate'
        });
      }, anime.random(0, 1000));
    });
  }
}
