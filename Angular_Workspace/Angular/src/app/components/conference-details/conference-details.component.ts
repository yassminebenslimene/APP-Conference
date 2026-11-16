import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConferenceService } from '../../services/conference.service';
import { Conference } from '../../models/conference.model';

@Component({
  selector: 'app-conference-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './conference-details.component.html',
  styleUrls: ['./conference-details.component.css']
})
export class ConferenceDetailsComponent {
  // Injection du service
  private conferenceService = inject(ConferenceService);

  // Signal pour la conférence sélectionnée
  selectedConference = this.conferenceService.selectedConference;

  /**
   * Calcule le nombre de places restantes
   */
  getRemainingPlaces(conference: Conference): number {
    return conference.maxParticipants - conference.nbParticipants;
  }

  /**
   * Formate la date au format YYYY-MM-DD
   */
  formatDateISO(date: Date): string {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  /**
   * Augmente le nombre de participants lors de l'inscription
   */
  subscribe(conference: Conference): void {
    if (this.getRemainingPlaces(conference) > 0) {
      this.conferenceService.updateParticipants(conference.id, 1);
    }
  }
}
