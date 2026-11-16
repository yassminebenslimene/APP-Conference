import { Injectable, signal } from '@angular/core';
import { Conference } from '../models/conference.model';

@Injectable({
  providedIn: 'root'
})
export class ConferenceService {
  // Signal pour stocker les conférences
  conferences = signal<Conference[]>([
    {
      id: 1,
      title: 'Angular 21 Conference',
      description: 'Découvrez les dernières fonctionnalités d\'Angular 21',
      date: new Date('2027-11-15'),
      place: 'Tunis',
      maxParticipants: 100,
      nbParticipants: 75
    },
    {
      id: 2,
      title: 'Signals Workshop',
      description: 'Atelier pratique sur les Signals Angular.',
      date: new Date('2027-11-30'),
      place: 'Ariana',
      maxParticipants: 50,
      nbParticipants: 44
    },
    {
      id: 3,
      title: 'Web Conference',
      description: 'Les tendances du web en 2027',
      date: new Date('2027-11-20'),
      place: 'Sousse',
      maxParticipants: 120,
      nbParticipants: 120
    }
  ]);

  // Signal pour stocker la conférence sélectionnée
  selectedConference = signal<Conference | null>(null);

  /**
   * Sélectionne une conférence
   */
  selectConference(conference: Conference): void {
    this.selectedConference.set(conference);
  }

  /**
   * Réinitialise la sélection
   */
  clearSelection(): void {
    this.selectedConference.set(null);
  }

  /**
   * Obtient la conférence sélectionnée
   */
  getSelectedConference(): Conference | null {
    return this.selectedConference();
  }

  /**
   * Met à jour le nombre de participants
   */
  updateParticipants(conferenceId: number, increment: number): void {
    const updated = this.conferences().map(conf => {
      if (conf.id === conferenceId) {
        return {
          ...conf,
          nbParticipants: conf.nbParticipants + increment
        };
      }
      return conf;
    });
    this.conferences.set(updated);

    // Si la conférence sélectionnée est mise à jour, on l'actualise aussi
    if (this.selectedConference()?.id === conferenceId) {
      this.selectConference(updated.find(c => c.id === conferenceId)!);
    }
  }
}
