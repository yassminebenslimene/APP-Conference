import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { NavigationComponent } from '../../components/navigation/navigation.component';
import { ProfileComponent } from '../../components/profile/profile.component';
import { FriendsListComponent } from '../../components/friends-list/friends-list.component';
import { NotificationsComponent } from '../../components/notifications/notifications.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    NavigationComponent,
    ProfileComponent,
    FriendsListComponent,
    NotificationsComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'Page d\'accueil';
}
