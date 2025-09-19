import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { LoginModel } from '../../model/employee.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {

  loginObj: LoginModel = new LoginModel();

  employeeService = inject(EmployeeService);
  router = inject(Router);

  onLogin() {
    this.employeeService.onLogin(this.loginObj).subscribe({
      next: (result: any) => {
        if (result.result) {
          alert("Login Success");
          localStorage.setItem("leaveUser", JSON.stringify(result.data));
          this.router.navigateByUrl("/dashboard");
        } else {
          alert(result.message);
        }
      },
      error: () => {
        alert("API Error");
      }
    });
  }
}
