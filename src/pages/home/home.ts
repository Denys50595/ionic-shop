import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductDetailsPage } from '../product-details/product-details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public status: boolean;

  constructor(public navCtrl: NavController) {
    this.status = true;
  }

  public listView(event) {
    this.status = true;
  }

  public gridView(event) {
    this.status = false;
  }

  public productDetails() {
    this.navCtrl.push(ProductDetailsPage);
  }

}
