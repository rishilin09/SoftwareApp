import { Testimony } from '../products.service';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'Testimony.page.html',
  styleUrls: ['Testimony.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, CommonModule],
})
export class Tab3Page {
  constructor(private prodServ: ProductsService) { }

  testimonies = this.prodServ.getTestimonies();

}
