import { VeiwUsersComponent } from './../veiw-users/veiw-users.component';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  UpdateForm!: FormGroup
  constructor(public dialog: MatDialog,
    public dialogRef: MatDialogRef<VeiwUsersComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.UpdateForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      country: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email])
    })
  }


  onNoClick(): void {
    this.dialogRef.close();
  }


  Submit() {

  }

  controls() {
    return this.UpdateForm.controls
  }

}
