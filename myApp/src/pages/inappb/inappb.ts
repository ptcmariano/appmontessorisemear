import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'nav',
  templateUrl: 'inappb.html',
})
export class InappbPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public iab: InAppBrowser) {
  }

  ionViewDidLoad() {
   this.iab.create('http://sistema.escolamontessorisemear.com.br/','_self','location=no,toolbar=no,allowInlineMediaPlayback=yes');
  }

}
