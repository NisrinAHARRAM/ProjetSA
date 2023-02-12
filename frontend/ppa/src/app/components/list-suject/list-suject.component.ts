import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Encadrant } from 'src/app/encadrant';
import { HttpService } from 'src/app/services/http.service';



@Component({
  selector: 'app-list-suject',
  templateUrl: './list-suject.component.html',
  styleUrls: ['./list-suject.component.css']
})
export class ListSujectComponent implements OnInit {
  title = 'Liste des sujets';
  id!:number;
  con=0;
  ide!:number;
  listOfEtudiants!:Encadrant[];
  constructor(private titleService:Title,private route: ActivatedRoute,private httpService:HttpService,
    private router: Router , ) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.httpService.fetchAllEn().subscribe(etudiant => this.listOfEtudiants = etudiant);
    this.httpService.fetchAllEn().subscribe(etudiant => {this.listOfEtudiants = etudiant;
    for(let et of this.listOfEtudiants){
      for(let list of et.listes){
        for(let val of list.validations){
          if(this.id==et.id){
            this.con++;
          }
        }
      }
    }
    });
    this.titleService.setTitle(this.title);
  }

}
