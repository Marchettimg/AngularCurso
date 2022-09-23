import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

import localEs from '@angular/common/locales/es'
import localFr from '@angular/common/locales/fr'
import { registerLocaleData } from '@angular/common';
registerLocaleData(localEs)
registerLocaleData(localFr)



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    SharedModule,
    VentasModule
       
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
