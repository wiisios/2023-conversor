import { Component, OnInit, inject } from '@angular/core';
import { User } from 'src/app/core/interfaces/user';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-usersmenu',
  templateUrl: './usersmenu.component.html',
  styleUrls: ['./usersmenu.component.scss']
})
export class UsersmenuComponent implements OnInit {
  ngOnInit(): void {
    this.UserServices.getAll().then(users => {
      this.users = users
    });

  }

  UserServices = inject(UserService);
  users: User[] = [];
}
