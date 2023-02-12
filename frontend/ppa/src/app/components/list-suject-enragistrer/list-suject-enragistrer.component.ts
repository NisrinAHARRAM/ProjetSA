import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Encadrant } from 'src/app/encadrant';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-list-suject-enragistrer',
  templateUrl: './list-suject-enragistrer.component.html',
  styleUrls: ['./list-suject-enragistrer.component.css']
})
export class ListSujectEnragistrerComponent implements OnInit{

  title = 'Liste des sujets';

  id!: number;

  constructor(private titleService:Title,private httpService: HttpService, private fb: FormBuilder,private router: Router,private route: ActivatedRoute,) { 
  
  }
  listOfEtudiants!: Encadrant[];
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.httpService.fetchAllEn().subscribe(etudiant => this.listOfEtudiants = etudiant);
  
    
;
this.titleService.setTitle(this.title);
}
}
