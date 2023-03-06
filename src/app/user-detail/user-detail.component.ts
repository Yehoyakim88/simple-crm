import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  userId = '';
  currentUser : User = new User();


  constructor(private route: ActivatedRoute, private firestore: AngularFirestore) {
    
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe( paramMap => {
      this.userId = paramMap.get('id');           // we declared inside app-routing.module.ts 
                                                  // {path: 'user/:id', component: UserDetailComponent}
      console.log('GOT IT ', this.userId);
      this.getUser();
  })
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
}
