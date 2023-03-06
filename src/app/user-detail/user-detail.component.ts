import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/models/user.class';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  userId = '';
  currentUser : User = new User();


  constructor(
    private route: ActivatedRoute, 
    private firestore: AngularFirestore, 
    public dialog: MatDialog) {
    
  }


  ngOnInit(): void {
    this.route.paramMap.subscribe( paramMap => {
      this.userId = paramMap.get('id');           // we declared inside app-routing.module.ts 
                                                  // {path: 'user/:id', component: UserDetailComponent}
      console.log('GOT IT ', this.userId);
      this.getUser();
  });
  }

  getUser() {
    this.firestore
    .collection('users')
    .doc(this.userId)
    .valueChanges()
    .subscribe((user : any) => {
      this.currentUser = new User(user);
      console.log(`Retrieved user of ID ${this.userId}:`,  this.currentUser);
    });
  }


  editUserDetails() {
    const dialog = this.dialog.open(DialogEditUserComponent);
    dialog.componentInstance.user = new User(this.currentUser.toJSON());
    dialog.componentInstance.userId = this.userId;
  }

  editAddress() {
    const dialog = this.dialog.open(DialogEditAddressComponent);
    dialog.componentInstance.user = new User(this.currentUser.toJSON());
    dialog.componentInstance.userId = this.userId;
  }
}