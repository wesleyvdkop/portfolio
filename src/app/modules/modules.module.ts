import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { HomeComponent } from './home/home.component';
import { HeadComponent } from './home/head/head.component';
import { SectionsModule } from './home/sections/sections.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    SectionsModule
  ],
  exports: [
    HomeComponent,
    HeadComponent
  ],
  declarations: [
    HomeComponent,
    HeadComponent
  ]
})
export class ModulesModule {
}
