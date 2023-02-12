import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Admin } from 'src/app/admin';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-list-email',
  templateUrl: './list-email.component.html',
  styleUrls: ['./list-email.component.css']
})
export class ListEmailComponent implements OnInit {
  listOfEtudiants!:Admin[];
    constructor(private httpService: HttpService, private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,) { 
    
  }
    ngOnInit(): void {
    this.httpService.fetchdomaine().subscribe(etudiant => this.listOfEtudiants = etudiant);
      
    }
}