import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'Accueil';

  
constructor(private titleService:Title,private httpService: HttpService, private fb: FormBuilder, 
  private router: Router, 
  private route: ActivatedRoute,) {  
   
}
ngOnInit() {
  this.titleService.setTitle(this.title);
}

affiche(){
  this.router.navigate(['login-admin']);

}



liste(){ 
  this.router.navigate(['select-enver']); 
 
}

}
