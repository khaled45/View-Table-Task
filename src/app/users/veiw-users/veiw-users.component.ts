import { UsersService } from './../../shared/services/users/users.service';
import { AddUserComponent } from './../add-user/add-user.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/shared/Interfaces/user';


const ELEMENT_DATA: User[] = [
  { image: "../../../assets/images/user.svg", email: "incere@april.biz", country: "Gwenborough", joinedDate: "Tue Nov 22 2022 00:41:21 GMT+0200 (Eastern European Standard Time)", name: 'Hydro' },
  { image: "../../../assets/images/user.svg", email: "incere@april.biz", country: "Gwenborough", joinedDate: "Tue Nov 22 2022 00:41:21 GMT+0200 (Eastern European Standard Time)", name: 'Heliu' },
  { image: "../../../assets/images/user.svg", email: "incere@april.biz", country: "Gwenborough", joinedDate: "Tue Nov 22 2022 00:41:21 GMT+0200 (Eastern European Standard Time)", name: 'Lithi' },
  { image: "../../../assets/images/user.svg", email: "incere@april.biz", country: "Gwenborough", joinedDate: "Tue Nov 22 2022 00:41:21 GMT+0200 (Eastern European Standard Time)", name: 'Beryl' },
  { image: "../../../assets/images/user.svg", email: "incere@april.biz", country: "Gwenborough", joinedDate: "Tue Nov 22 2022 00:41:21 GMT+0200 (Eastern European Standard Time)", name: 'Boron' },
  { image: "../../../assets/images/user.svg", email: "incere@april.biz", country: "Gwenborough", joinedDate: "Tue Nov 22 2022 00:41:21 GMT+0200 (Eastern European Standard Time)", name: 'Carbo' },
  { image: "../../../assets/images/user.svg", email: "incere@april.biz", country: "Gwenborough", joinedDate: "Tue Nov 22 2022 00:41:21 GMT+0200 (Eastern European Standard Time)", name: 'Nitro' },
  { image: "../../../assets/images/user.svg", email: "incere@april.biz", country: "Gwenborough", joinedDate: "Tue Nov 22 2022 00:41:21 GMT+0200 (Eastern European Standard Time)", name: 'Oxyge' },
  { image: "../../../assets/images/user.svg", email: "incere@april.biz", country: "Gwenborough", joinedDate: "Tue Nov 22 2022 00:41:21 GMT+0200 (Eastern European Standard Time)", name: 'Fluor' },
  { image: "../../../assets/images/user.svg", email: "incere@april.biz", country: "Gwenborough", joinedDate: "Tue Nov 22 2022 00:41:21 GMT+0200 (Eastern European Standard Time)", name: 'Neon' }]

@Component({
  selector: 'app-veiw-users',
  templateUrl: './veiw-users.component.html',
  styleUrls: ['./veiw-users.component.scss']
})
export class VeiwUsersComponent implements OnInit {

  ListOfUsers: any[] = []
  PrintedDate: Date = new Date()
  userImage: string = "../../../assets/images/user.svg"
  displayedColumns: string[] = ["name", "email", "country", "joinedDate", "actions"];
  dataSource = ELEMENT_DATA;

  constructor(public dialog: MatDialog,
    public dialogRef: MatDialogRef<AddUserComponent>,
    private userServices: UsersService) { }

  ngOnInit(): void {
    this.GetUsers()
  }



  AddUser() {
    const dialogRef = this.dialog.open(AddUserComponent, {
      width: '400px',
      height: 'auto'
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result)
    })
  }

  GetUsers() {
    // debugger
    this.userServices.getUsers().subscribe((resp: any) => {
      this.ListOfUsers = resp
    })
  }

}
