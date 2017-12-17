import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateContactComponent} from '../create-contact/create-contact.component';
import { ContactComponent } from '../contact/contact.component';


const routes: Routes = [
  { path: '', redirectTo: '/allContacts', pathMatch: 'full' },
  { path: 'newContact', component: CreateContactComponent },
  { path: 'allContacts', component:  ContactComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule {


 }
