import { Component } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user: User = {
    id: 1,
    name: 'Ahmed',
    email: 'ahmed@email.com',
    avatar: '👤'
  };
}
