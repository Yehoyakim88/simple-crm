import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogEditAddressComponent } from './dialog-edit-address.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from './../../environments/environment';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';


describe('DialogEditAddressComponent', () => {
  let component: DialogEditAddressComponent;
  let fixture: ComponentFixture<DialogEditAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        AngularFireModule.initializeApp(environment.firebaseConfig), 
        AngularFirestoreModule, 
        MatFormFieldModule,
        FormsModule,
        MatInputModule
      ],
      declarations: [ DialogEditAddressComponent ],
      providers: [ 
        {provide: MatDialogRef , useValue:{} },
        { provide: MAT_DIALOG_DATA, useValue: {} }
       ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEditAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
