import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-friends-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.css']
})
export class FriendsListComponent {
  friends: User[] = [
    { id: 2, name: 'Sami', email: 'sami@email.com' },
    { id: 3, name: 'Sara', email: 'sara@email.com' },
    { id: 4, name: 'Amine', email: 'amine@email.com' }
  ];
}
