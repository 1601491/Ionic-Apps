// 1601491 Samu Nordberg

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PProjectPage } from './p-project';

@NgModule({
  declarations: [
    PProjectPage,
  ],
  imports: [
    IonicPageModule.forChild(PProjectPage),
  ],
})
export class PProjectPageModule {}
