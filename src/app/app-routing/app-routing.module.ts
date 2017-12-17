import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateContactComponent} from '../create-contact/create-contact.component';
import { ContactComponent } from '../contact/contact.component';


const routes: Routes = [
  { path: '', redirectTo: '/all-contacts', pathMatch: 'full' },
  { path: 'new-contact', component: CreateContactComponent },
  { path: 'all-contacts', component:  ContactComponent }
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
