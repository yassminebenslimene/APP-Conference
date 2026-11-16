import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Conference } from '../../models/conference.model';
import { ConferenceService } from '../../services/conference.service';

@Component({
  selector: 'app-conference-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './conference-list.component.html',
  styleUrls: ['./conference-list.component.css']
})
export class ConferenceListComponent {
  // Injection du service
  private conferenceService = inject(ConferenceService);

  // Signal pour les conférences (réactif)
  conferences = this.conferenceService.conferences;

  // Signal pour la conférence sélectionnée
  selectedConference = this.conferenceService.selectedConference;

  searchTerm: string = '';

  /**
   * Calcule le nombre de places restantes
   */
  getRemainingPlaces(conference: Conference): number {
    return conference.maxParticipants - conference.nbParticipants;
  }

  /**
   * Détermine la couleur et l'état du bouton d'inscription
   */
  getButtonStatus(conference: Conference): { color: string; status: string } {
    const remaining = this.getRemainingPlaces(conference);

    if (remaining === 0) {
      return { color: 'red', status: 'Complet' };
    } else if (remaining < 10) {
      return { color: 'orange', status: 'Places limitées' };
    } else {
      return { color: 'green', status: 'Disponible' };
    }
  }

  /**
   * Formate la date au format français
   */
  formatDate(date: Date): string {
    const d = new Date(date);
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    };
    return d.toLocaleDateString('fr-FR', options);
  }

  /**
   * Filtre les conférences selon le terme de recherche
   */
  get filteredConferences(): Conference[] {
    const allConferences = this.conferences();
    if (!this.searchTerm.trim()) {
      return allConferences;
    }

    const term = this.searchTerm.toLowerCase();
    return allConferences.filter(conf =>
      conf.title.toLowerCase().includes(term) ||
      conf.place.toLowerCase().includes(term)
    );
  }

  /**
   * Sélectionne une conférence et l'affiche dans les détails
   */
  selectConference(conference: Conference): void {
    this.conferenceService.selectConference(conference);
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
