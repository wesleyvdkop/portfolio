import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef
} from '@angular/core';

import anime from 'animejs';

@Component({
  selector: 'animated-field',
  templateUrl: './animated-field.component.html'
})

export class AnimatedFieldComponent implements AfterViewInit {

  @ViewChild('scene') private scene: ElementRef;

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
