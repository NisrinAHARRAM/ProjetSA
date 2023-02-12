import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
  invalidCredentials = false;
  loginSuccess = false;
  errorMessage = 'information incorrectes !';
  constructor(private httpService: HttpService, private fb: FormBuilder,
  private router: Router,
  private route: ActivatedRoute,) { 
  
}
  ngOnInit(): void {
    
  }
  saveProduct(f:any){
          if((f.email=="admin.geniral@gmail.com")&&(f.password=="admin2016")){
            this.router.navigate(['espace-admin']);
          }
          else{
            this.invalidCredentials = true;
            this.loginSuccess = false
          }
 
}
}
