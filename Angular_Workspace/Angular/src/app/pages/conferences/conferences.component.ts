import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { NavigationComponent } from '../../components/navigation/navigation.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ConferenceListComponent } from '../../components/conference-list/conference-list.component';

@Component({
  selector: 'app-conferences',
  standalone: true,
  imports: [
    HeaderComponent,
    NavigationComponent,
    FooterComponent,
    ConferenceListComponent
  ],
  templateUrl: './conferences.component.html',
  styleUrls: ['./conferences.component.css']
})
export class ConferencesComponent {
  title = 'Page des conférences';
}
