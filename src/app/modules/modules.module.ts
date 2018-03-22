import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { HomeComponent } from './home/home.component';
import { HeadComponent } from './home/head/head.component';
import { AnimatedFieldComponent } from './animated-field/animated-field.component';
import { SectionsModule } from './home/sections/sections.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    SectionsModule
  ],
  exports: [
    AnimatedFieldComponent,
    HomeComponent,
    HeadComponent
  ],
  declarations: [
    AnimatedFieldComponent,
    HomeComponent,
    HeadComponent
  ]
})
export class ModulesModule {
}
