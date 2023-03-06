import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss']
})
export class DialogEditUserComponent implements OnInit {
  user: User;
  userId: string;
  birthDate: Date;
  loading: boolean = false;


  constructor(
    public dialogRef: MatDialogRef<DialogEditUserComponent>, 
    private firestore: AngularFirestore) {}


  ngOnInit(): void {
  }

  saveUser() {
    this.loading = true;
    this.firestore
    .collection('users')
    .add(this.user.toJSON())
    .then((result:any) => {
      this.loading = false;
      console.log('Editing user private info finished', result);
      this.dialogRef.close();
    });
  }

  
}
