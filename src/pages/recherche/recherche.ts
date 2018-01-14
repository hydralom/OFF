import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ItemDetailsPage} from '../item-details/item-details';

import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'page-recherche',
  templateUrl: 'recherche.html'
})
export class RecherchePage {
  items : any = [];
  min:number=0;

  constructor(public navCtrl: NavController, public http: HttpClient) {

  }

  ngOnInit(): void {
    this.http.get("../../assets/data/csv_converti.json")
      .subscribe(data => {
        this.items = data;
      })
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }

  oInfinite(infiniteScroll:any) {
    console.log('doInfinite, start is currently '+this.min);
    this.min+=50;

    this.items.then(()=>{
      infiniteScroll.complete();
    });

  }

}
