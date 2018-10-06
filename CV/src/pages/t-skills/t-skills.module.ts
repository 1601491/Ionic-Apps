// 1601491 Samu Nordberg

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TSkillsPage } from './t-skills';

@NgModule({
  declarations: [
    TSkillsPage,
  ],
  imports: [
    IonicPageModule.forChild(TSkillsPage),
  ],
})
export class TSkillsPageModule {}
