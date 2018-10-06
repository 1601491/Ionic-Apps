// 1601491 Samu Nordberg

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActivitiesPage } from './activities';

@NgModule({
  declarations: [
    ActivitiesPage,
  ],
  imports: [
    IonicPageModule.forChild(ActivitiesPage),
  ],
})
export class ActivitiesPageModule {}
