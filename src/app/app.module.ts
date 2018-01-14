import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {AddProduitPage} from '../pages/addProduit/addProduit';
import {RecherchePage} from '../pages/recherche/recherche';
import {ItemDetailsPage} from '../pages/item-details/item-details';
import {ModifierProduitPage} from "../pages/modifierProduit/modifierProduit";
import {TabsPage} from '../pages/tabs/tabs';
import {StatsPage} from "../pages/stats/stats";

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    MyApp,
    StatsPage,
    RecherchePage,
    ItemDetailsPage,
    AddProduitPage,
    ModifierProduitPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    StatsPage,
    AddProduitPage,
    RecherchePage,
    ItemDetailsPage,
    ModifierProduitPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
