import { Component } from '@angular/core';
import { ConferenceListComponent } from '../../components/conference-list/conference-list.component';
import { ConferenceDetailsComponent } from '../../components/conference-details/conference-details.component';
import { HeaderComponent } from '../../components/header/header.component';
import { NavigationComponent } from '../../components/navigation/navigation.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-communication-demo',
  standalone: true,
  imports: [
    HeaderComponent,
    NavigationComponent,
    FooterComponent,
    ConferenceListComponent,
    ConferenceDetailsComponent
  ],
  templateUrl: './communication-demo.component.html',
  styleUrls: ['./communication-demo.component.css']
})
export class CommunicationDemoComponent {
  title = 'Communication entre composants';
}
