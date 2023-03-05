import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from 'src/models/user.class';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';


// TO DO: Add Mat-Chip to status of every user
// <mat-chip-option color="accent" selected>Accent fish</mat-chip-option>
const ELEMENT_DATA: EmployeeElement[] = [
  {
    name: 'Alfons',
    email: 'user@company-xyz.de',
    usertype: 'Employee',
    status: 'userActive',
    created: '01.01.2023',
  },
  {
    name: 'Hanna',
    email: 'user@company-xyz.de',
    usertype: 'Employee',
    status: 'userActive',
    created: '01.01.2023',
  },
  {
    name: 'Ludwig',
    email: 'user@company-xyz.de',
    usertype: 'Employee',
    status: 'userActive',
    created: '01.01.2023',
  },
  {
    name: 'Erich',
    email: 'user@company-xyz.de',
    usertype: 'Employee',
    status: 'userActive',
    created: '01.01.2023',
  },
  {
    name: 'Franz',
    email: 'user@company-xyz.de',
    usertype: 'Employee',
    status: 'userActive',
    created: '01.01.2023',
  },
  {
    name: 'David',
    email: 'user@company-xyz.de',
    usertype: 'Employee',
    status: 'userActive',
    created: '01.01.2023',
  },
  {
    name: 'Christoph',
    email: 'user@company-xyz.de',
    usertype: 'Employee',
    status: 'userActive',
    created: '01.01.2023',
  },
  {
    name: 'Paul',
    email: 'user@company-xyz.de',
    usertype: 'Employee',
    status: 'userActive',
    created: '01.01.2023',
  },
  {
    name: 'Hans',
    email: 'user@company-xyz.de',
    usertype: 'Employee',
    status: 'userActive',
    created: '01.01.2023',
  },
  {
    name: 'Jörg',
    email: 'user@company-xyz.de',
    usertype: 'Employee',
    status: 'userActive',
    created: '01.01.2023',
  },
];

export interface EmployeeElement {
  // name: string;
  // position: number;
  // weight: number;
  // symbol: string;
  name: string;
  email: string;
  usertype: string;
  status: string;
  // status: MatChipsModule;
  created: string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements AfterViewInit {
  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[1]);
  user: User = new User();
  dataSource = new MatTableDataSource<EmployeeElement>(ELEMENT_DATA);
  i: number;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  displayedColumns: string[] = [
    'name',
    'email',
    'usertype',
    'status',
    'created',
  ];

  clickedRows = new Set<EmployeeElement>();

  constructor(public dialog: MatDialog) {
    console.log('dataSource type: ', typeof this.dataSource);
    this.loopThroughTableData();
  }

  openDialog() {
    console.log('openDialog() called...');
    this.dialog.open(DialogAddUserComponent);
  }

  loopThroughTableData() {
    console.log(Object.entries(this.dataSource));
  }
}
