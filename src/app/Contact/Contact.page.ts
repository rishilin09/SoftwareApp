import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Contact, ProductsService } from '../products.service';

@Component({
  selector: 'app-contact',
  templateUrl: './Contact.page.html',
  styleUrls: ['./Contact.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ContactPage {

  constructor(private prodServ: ProductsService) {}

  contact: Contact = this.prodServ.getContacts();

}
