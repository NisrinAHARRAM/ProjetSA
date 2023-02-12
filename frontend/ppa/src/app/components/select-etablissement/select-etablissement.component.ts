import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-select-etablissement',
  templateUrl: './select-etablissement.component.html',
  styleUrls: ['./select-etablissement.component.css']
})
export class SelectEtablissementComponent {

  title = 'Etablisment';
  dee: any; 
  constructor(private titleService:Title,private httpService: HttpService, private fb: FormBuilder, 
    private router: Router, 
    private route: ActivatedRoute,) {  
     
  } 
    ngOnInit(): void { 
       this.dee=sessionStorage.getItem('idE'); 
       this.titleService.setTitle(this.title);
    } 
    goToPage1(nom:string){ 
      sessionStorage.setItem('id',nom.toString()); 
      this.router.navigate(['select-depatement']); 
    } 

}
