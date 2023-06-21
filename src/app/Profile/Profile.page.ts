import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'Profile.page.html',
  styleUrls: ['Profile.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent],
})
export class ProfilePage {
  constructor() {}
}
