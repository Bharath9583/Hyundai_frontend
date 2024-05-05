import { AfterViewInit, Component, Inject, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { NgClass } from '@angular/common';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';

export interface UserData {
  employee_id?: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
}
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    NgClass,
    MatDialogModule,
    HttpClientModule,
  ],
  standalone: true,
})
export class UsersComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'employee_id',
    'first_name',
    'last_name',
    'email',
    'gender',
  ];
  dataSource: MatTableDataSource<UserData>;
  selectedRowIndex: any = 0;
  selectedRow: any
  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;
  constructor(public dialog: MatDialog, private userService: UsersService) {
    this.dataSource = new MatTableDataSource();
    this.userService.getUsers().subscribe(
      (d) => {
        this.dataSource = new MatTableDataSource(d);
        this.dataSource.paginator = this.paginator;
      },
      (err) => {
        this.dataSource = new MatTableDataSource();
      }
    );
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  addData() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe((result) => {
      this.userService.addUser(result.data).subscribe(d=>{
        this.dataSource = new MatTableDataSource(d);
        this.dataSource.paginator = this.paginator;
      })
    });
  }
  removeData() {
    this.userService.deleteUser(this.selectedRowIndex).subscribe((d)=>{
      this.dataSource = new MatTableDataSource(d);
      this.dataSource.paginator = this.paginator;
    })
  }
  updateData() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog, {
      data: {
        employee: this.selectedRow,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.userService.updateUser(result.data).subscribe(d=>{
        this.dataSource = new MatTableDataSource(d);
        this.dataSource.paginator = this.paginator;
      })
    });
  }
  highlight(row: any) {
    if (this.selectedRowIndex !== row.employee_id) {
      this.selectedRowIndex = row.employee_id;
      this.selectedRow = row
    } else {
      this.selectedRowIndex = 0;
      this.selectedRow = null
    }
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: './dialog-content-dialog.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, ReactiveFormsModule],
})
export class DialogContentExampleDialog {
  reactiveForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DialogContentExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.reactiveForm = this.fb.group({
      firstName: [this.data ?this.data.employee.first_name:'', Validators.required],
      lastName: [this.data ?this.data.employee.last_name:'', Validators.required],
      email: [this.data ?this.data.employee.email:'', [Validators.required, Validators.email]],
      gender: [this.data ?this.data.employee.gender:'', Validators.required],
    });
  }
  onSubmit() {
    this.dialogRef.close({ event: 'Cancel', data: {...this.reactiveForm.value,
      employee_id: this.data ? this.data.employee.employee_id : null 
    } });
  }
}
