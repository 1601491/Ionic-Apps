// 1601491 Samu Nordberg

import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';


export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}


@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

rootPage="TabsPage";

@ViewChild(Nav) nav: Nav;

pages: PageInterface[] = [
  { title: 'Home', pageName: 'TabsPage', tabComponent: 'ServicePage', index: 0, icon: 'home'},
  { title: 'About Me', pageName: 'TabsPage', tabComponent: 'AboutPage', index: 1, icon: 'person'},
  { title: 'Technical Skills', pageName: 'TabsPage', tabComponent: 'TSkillsPage', index: 2, icon: 'podium'},
  { title: 'Soft Skills', pageName: 'TabsPage', tabComponent: 'SSkillsPage', index: 3, icon: 'podium'},
  { title: 'Personal Projects', pageName: 'TabsPage', tabComponent: 'PProjectPage', index: 4, icon: 'clipboard'},
  { title: 'Team Projects', pageName: 'TabsPage', tabComponent: 'TProjectPage', index: 5, icon: 'clipboard'},
  { title: 'Extra Curriculum Activities', pageName: 'TabsPage', tabComponent: 'ActivitiesPage', index: 6, icon: 'bicycle'},
  { title: 'Contact Information', pageName: 'TabsPage', tabComponent: 'ContactsPage', index: 7, icon: 'contact'},
]



  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openPage(page: PageInterface) {
    let params ={};
    if (page.index){
      params = {tabIndex: page.index};
    }
    if (this.nav.getActiveChildNav() && page.index != undefined) {
      this.nav.getActiveChildNav().select(page.index);
    }
    else {
      this.nav.setRoot(page.pageName, params);
    }
  }
  
isActive(page: PageInterface){
  let childNav = this.nav.getActiveChildNav();

  if(childNav){
    if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
      return 'primary';
    }
    return;
    }
    if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return 'primary';
    }
  }
  
}

