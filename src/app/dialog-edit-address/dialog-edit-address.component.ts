import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-dialog-edit-address',
  templateUrl: './dialog-edit-address.component.html',
  styleUrls: ['./dialog-edit-address.component.scss']
})
export class DialogEditAddressComponent {
  user = new User;
  loading: boolean = false;


  constructor(public dialogRef: MatDialogRef<DialogEditAddressComponent>, private firestore: AngularFirestore) {}


  saveUser() {
    this.loading = true;
    this.firestore
    .collection('users')
    .add(this.user.toJSON())
    .then((result:any) => {
      this.loading = false;
      console.log('Adding user finished', result);
      this.dialogRef.close();
    });
  }
}
