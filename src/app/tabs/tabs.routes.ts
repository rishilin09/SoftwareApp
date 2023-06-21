import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadComponent: () =>
          import('../Profile/Profile.page').then((m) => m.ProfilePage),
      },
      {
        path: 'tab2',
        loadComponent: () =>
          import('../Services/Services.page').then((m) => m.ServicesPage),
      },
      {
        path: 'tab3',
        loadComponent: () =>
          import('../Testimony/Testimony.page').then((m) => m.Tab3Page),
      },
      {
        path: 'tab4',
        loadComponent: () => import('../Contact/Contact.page').then( m => m.ContactPage)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full',
      },
    ],
  },
];
