import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-select-universite',
  templateUrl: './select-universite.component.html',
  styleUrls: ['./select-universite.component.css']
})
export class SelectUniversiteComponent {

  title = 'Les universite';
  constructor(private titleService:Title,private httpService: HttpService, private fb: FormBuilder, 
    private router: Router, 
    private route: ActivatedRoute,) {  
     
  } 
    ngOnInit(): void { 
      this.titleService.setTitle(this.title);
    } 
    goToPage1(nom:string){ 
      sessionStorage.setItem('idE',nom.toString()); 
      this.router.navigate(['select-etab']); 
    } 
}


