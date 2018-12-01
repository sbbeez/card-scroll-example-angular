import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CardItemComponent } from './card-item/card-item.component';
import { CardScrollComponent } from './card-scroll/card-scroll.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, CardItemComponent, CardScrollComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
