import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SectionAboutComponent } from './about/about.component';
import { SectionContactComponent } from './contact/contact.component';
import { SectionWorkComponent } from './work/work.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    SectionAboutComponent,
    SectionContactComponent,
    SectionWorkComponent
  ],
  declarations: [
    SectionAboutComponent,
    SectionContactComponent,
    SectionWorkComponent
  ]
})
export class SectionsModule {
}
