import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { ContactRoutingModule } from '../contact.routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';



@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ]
})
export class ContactModule { }
