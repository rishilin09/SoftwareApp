import { Product, ProductsService } from '../products.service';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab2',
  templateUrl: 'Services.page.html',
  styleUrls: ['Services.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, CommonModule]
})
export class ServicesPage {

  constructor(private prodServ: ProductsService) { }

  products: Product[] = this.prodServ.getProducts();

}
