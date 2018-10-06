// 1601491 Samu Nordberg

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SSkillsPage } from './s-skills';

@NgModule({
  declarations: [
    SSkillsPage,
  ],
  imports: [
    IonicPageModule.forChild(SSkillsPage),
  ],
})
export class SSkillsPageModule {}
