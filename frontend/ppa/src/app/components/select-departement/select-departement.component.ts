import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-select-departement',
  templateUrl: './select-departement.component.html',
  styleUrls: ['./select-departement.component.css']
})
export class SelectDepartementComponent {

  title = 'Departement';
dee: any; 
constructor(private titleService:Title,private httpService: HttpService, private fb: FormBuilder, 
  private router: Router, 
  private route: ActivatedRoute,) {  
   
} 
  ngOnInit(): void { 
     this.dee=sessionStorage.getItem('id'); 
     this.titleService.setTitle(this.title);
  } 
  goToPage1(nom:string){ 
    sessionStorage.setItem('idf',nom.toString()); 
    this.router.navigate(['etudiant-non']); 
  } 

}
