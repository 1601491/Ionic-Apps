// 1601491 Samu Nordberg

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TProjectPage } from './t-project';

@NgModule({
  declarations: [
    TProjectPage,
  ],
  imports: [
    IonicPageModule.forChild(TProjectPage),
  ],
})
export class TProjectPageModule {}
