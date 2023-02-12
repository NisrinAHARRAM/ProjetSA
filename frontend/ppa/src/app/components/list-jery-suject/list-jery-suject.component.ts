import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Encadrant } from 'src/app/encadrant';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-list-jery-suject',
  templateUrl: './list-jery-suject.component.html',
  styleUrls: ['./list-jery-suject.component.css']
})
export class ListJerySujectComponent implements OnInit {
  title = 'La  liste des jurys';
  id!:number;
  sejet!:string;
  con=0;
  currentSubject: any;
  listOfEtudiants!:Encadrant[];
  listOfEt!:Encadrant;
  liet:Encadrant[]=[];
  liett:Encadrant[]=[];
  select!:Encadrant;
  lol:string[]=[];
  lol2:string[]=[];
  lol3:string[]=[];
  nom!:string;
  let: string[]=[]; 
  nomm: string[]=[]; 
  prenom: string[]=[]; 
  depar: string[]=[]; 
  constructor(private titleService:Title,private route: ActivatedRoute,private httpService:HttpService,
    private router: Router , ) { }
  ngOnInit(): void {
  this.id = this.route.snapshot.params['id'];
  this.sejet = this.route.snapshot.params['sujet'];
  this.httpService.fetchAllEn().subscribe(etudiant => {this.listOfEtudiants = etudiant;
 
    for(let i of this.listOfEtudiants){
      for( let list of i.listes ){
        for( let va of list.validations ){
          for(let l of va.jerys) {
            if((this.id==i.id) &&(this.sejet==list.sujet)){
              this.httpService.EncadrantById(l.idE).subscribe(data => {this.listOfEt =data
             
               this.liet.push(this.listOfEt);
              
              
              }); 
          
    }}  }}}
  
  
 
});
this.httpService.fetchAllEn().subscribe(etudiant => {this.listOfEtudiants = etudiant;
 
  for(let i of this.listOfEtudiants){
    for( let list of i.listes ){
      for( let va of list.validations ){
        for(let l of va.groupes) {
          if((this.id==i.id) &&(this.sejet==list.sujet)){
            this.httpService.EncadrantById(l.idE).subscribe(data => {this.listOfEt =data
           
             this.liett.push(this.listOfEt);
            
            
            }); 
        
  }}  }}}



});
this.titleService.setTitle(this.title);
}


}