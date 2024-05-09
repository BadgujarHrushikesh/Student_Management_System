import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public username: string = '';
  public password: string = '';

  constructor(private router: Router) { }

  onSubmit() {

    console.log(this.username);
    console.log(this.password);

    if (this.username === 'admin' && this.password === 'admin') {
      this.router.navigate(['app','student-list'])
    }
    else {
      alert("Invalid Login Details")
      this.username = '';
      this.password = '';
      this.router.navigate(['auth','login'])
    }

  }
}









