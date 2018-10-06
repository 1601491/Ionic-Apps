// 1601491 Samu Nordberg

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1Root='ServicePage';
  tab2Root='AboutPage';
  tab3Root='TSkillsPage';
  tab4Root='SSkillsPage';
  tab5Root='PProjectPage';
  tab6Root='TProjectPage';
  tab7Root='ActivitiesPage';
  tab8Root='ContactsPage';
  myIndex: number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.myIndex = navParams.data.tabIndex || 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
