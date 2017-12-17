import { AppRoutingModule } from './app-routing/app-routing.module';
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
import { DeleteContactComponent } from './delete-contact/delete-contact.component';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { EditContactComponent } from './edit-contact/edit-contact.component';

@NgModule({
  declarations: [
    AppComponent,    
    FooterComponent,
    HeaderComponent,
    LeftMenuComponent,
    ContactComponent,
    DeleteContactComponent,  
    CreateContactComponent, EditContactComponent
  ],
  entryComponents: [DeleteContactComponent,EditContactComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ModalModule.forRoot()
  ],
  providers: [ContactServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
