import {AppRoutingModule} from './app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { ContactComponent } from './contact/contact.component';
import { ContactServiceService } from './services/contact-service.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CreateContactComponent } from './create-contact/create-contact.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LeftMenuComponent,
    ContactComponent,
    CreateContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ContactServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
