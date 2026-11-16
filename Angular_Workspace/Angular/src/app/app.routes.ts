import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CommunicationDemoComponent } from './pages/communication-demo/communication-demo.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'communication-demo',
    component: CommunicationDemoComponent
  }
];
