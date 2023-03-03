import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})


export class DialogAddUserComponent {
  user = new User;
  birthDate: Date;

  constructor(private firestore: AngularFirestore) {}

  saveUser() {
    this.user.birthDate = this.birthDate.getTime();

    this.firestore
    .collection('users')
    .add(this.user.toJSON())
    .then((result:any) => {
      console.log('Adding user finished', result);
    });
    console.log('Hello from saveUser() function :)');
  }
}
