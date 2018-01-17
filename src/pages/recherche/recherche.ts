import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

import {ItemDetailsPage} from '../item-details/item-details';

import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'page-recherche',
  templateUrl: 'recherche.html'
})

export class RecherchePage {
  items: any = [];
  items_complete: any = [];
  newItem: any;

  min: number = 0;

  cardAdvancedSearchViewShow: Boolean = false;
  additives_n: Boolean = false;
  ingredients_from_palm_oil_n: Boolean = false;
  ingredients_that_may_be_from_palm_oil_n: Boolean = false;

  infoSearch = "product_name";

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.newItem = navParams.get('item');
    // if (this.newItem && this.items_complete.find(this.findProductName, this.newItem.product_name.toLocaleLowerCase())) {
    //   let alert = this.alertCtrl.create({
    //     title: 'Erreur',
    //     message: 'Le produit existe déjà',
    //     buttons: [
    //       { text: 'Valider'}
    //     ]
    //   });
    //   alert.present();
    // }
    console.log(this.newItem);
    this.items_complete.push(this.newItem);
  }

  findProductName(item) {
    return item.product_name.toLocaleLowerCase() === this;
  }

  ngOnInit(): void {
    this.http.get("../../assets/data/csv_converti.json")
      .subscribe(data => {
        this.items = data;
        this.items_complete = data;
      })
  }

  openCloseCard() {
    if (this.cardAdvancedSearchViewShow) {
      this.cardAdvancedSearchViewShow = false;
    } else {
      this.cardAdvancedSearchViewShow = true;
    }
  }

  closeAdvancedSearch() {
    this.cardAdvancedSearchViewShow = false;
    this.additives_n = false;
    this.ingredients_from_palm_oil_n = false;
    this.ingredients_that_may_be_from_palm_oil_n = false;
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }

  oInfinite(infiniteScroll: any) {
    this.min += 50;

    this.items.then(() => {
      infiniteScroll.complete();
    });
  }

  filterItems(ev: any) {
    let val = ev.target.value;

    //ne pas regarder le if qui suit svp :)
    if (this.newItem && !this.items_complete.find(this.findProductName, this.newItem.product_name.toLocaleLowerCase())) {
      //vous êtes pas gentil :'(
      this.items_complete.push(this.newItem);
    }

    if (val && val.trim() !== '' && this.infoSearch == "product_name") {
      this.items = this.items.filter(function (item) {
        return item.product_name.toLowerCase().includes(val.toLowerCase());
      });
    } else if (val && val.trim() !== '' && this.infoSearch == "brands") {
      this.items = this.items.filter(function (item) {
        return item.brands.toLowerCase().includes(val.toLowerCase());
      });
    } else if (val && val.trim() !== '' && this.infoSearch == "countries_fr") {
      this.items = this.items.filter(function (item) {
        return item.countries_fr.toLowerCase().includes(val.toLowerCase());
      });
    } else {
      this.items = this.items_complete;
      return this.items;
    }
  }
}
