import { Component } from '@angular/core';

import { NavController, MenuController, NavParams } from 'ionic-angular';
// import {Apiservice} from '../../providers/apiservice';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  // providers: [Apiservice]
})
export class HomePage {
  public people: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
    // this.loadUsers();
    this.menuCtrl.enable(true, 'sidemenu');
  }

  // loadUsers(){
  //   this.apiserve.load()
  //   .then(data => {
  //     this.people = data;
  //   });
  // }

}
