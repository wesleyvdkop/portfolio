import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SectionAboutComponent } from './about/about.component';
import { SectionContactComponent } from './contact/contact.component';
import { SectionWorkComponent } from './work/work.component';
import { SectionSkillsetComponent } from './skillset/skillset.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    SectionAboutComponent,
    SectionContactComponent,
    SectionWorkComponent,
    SectionSkillsetComponent
  ],
  declarations: [
    SectionAboutComponent,
    SectionContactComponent,
    SectionWorkComponent,
    SectionSkillsetComponent
  ]
})
export class SectionsModule {
}
