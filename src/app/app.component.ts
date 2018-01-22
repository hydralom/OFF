import {Component, ViewChild} from '@angular/core';
import {Platform, MenuController, Nav} from 'ionic-angular';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {RecherchePage} from "../pages/recherche/recherche";
import {AddProduitPage} from "../pages/addProduit/addProduit";
import {StatsPage} from "../pages/stats/stats";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = RecherchePage;
  pages: Array<{ title: string, icon: string, component: any }>;

  constructor(public platform: Platform,
              public menu: MenuController,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen) {
    // platform.ready().then(() => {
    //   statusBar.styleDefault();
    //   splashScreen.hide();
    // });
    this.initializeApp();

    // set our app's pages
    this.pages = [
      {title: 'Recherche', icon: 'search', component: RecherchePage},
      {title: 'Ajout Produit', icon: 'restaurant', component: AddProduitPage},
      {title: 'Statistiques', icon: 'analytics', component: StatsPage}
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
