import { NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    HttpClientModule,
    NgIf
  ]
})
export class LoginComponent {
  @ViewChild('f') form: NgForm
  loginError: string = ""
  constructor(private router: Router, private userService: UsersService) {}
  login(){
    this.userService.login(this.form.value).subscribe((d)=>{
      sessionStorage.setItem('token',d.token)
      this.router.navigate([''])
    },(err)=>{
      this.loginError = err.error.message
      setTimeout(()=>{
        this.loginError = ""
      },2000)
    })
  }
}
