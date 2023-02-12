import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Encadrant } from 'src/app/encadrant';
import { Groupe } from 'src/app/groupe';
import { Jery } from 'src/app/jery';
import { HttpService } from 'src/app/services/http.service';
import { Validation } from 'src/app/validation';

@Component({
  selector: 'app-liste-jury',
  templateUrl: './liste-jury.component.html',
  styleUrls: ['./liste-jury.component.css']
})
export class ListeJuryComponent  implements OnInit {
  title = 'Les jurys';
  id!: number;
  ide!:number;
  con=0;
  listOfEGroupe!:Encadrant[];
  selectedvalid!:Encadrant;
  valid!:Validation;
  vali!:Validation[];
//  listOfEGroupe!:Groupe[];
  count!:number;
  private  currentProduct:any;

  constructor(private titleService:Title,private route: ActivatedRoute,private httpService:HttpService,
    private router: Router  ) { }


    listOfEtudiants!: Encadrant[];


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.httpService.fetchAllEn().subscribe(etudiant => this.listOfEtudiants = etudiant);
  //  this.httpService.fetchAllgroupe().subscribe(groupe => this.listOfEGroupe = groupe);
    const de=sessionStorage.getItem('idE');
    this.ide = Number(de);
    console.log(this.ide);

    this.titleService.setTitle(this.title);
}

demande(id:number,idd:number){
  this.httpService.fetchAllEn().subscribe(data => {
    this.listOfEGroupe = data;
    for(let i of this.listOfEGroupe){
      for(let jer of i.groupes){
        if(this.id==i.id){
        this.con++;
        console.log(this.count)
      }
      }
  }
  if(this.con<=2){
  console.log(id);
  console.log(idd);
  this.httpService.EncadrantById(id).subscribe(data => {
    this.selectedvalid = data;
    this.httpService.vaByappstring(this.ide).subscribe(data => {
      this.valid = data;
      console.log(this.valid);
    const va = new Groupe();
    va.idE=idd;
    va.encadrant=this.selectedvalid;
    va.validation=this.valid;
    this.httpService.addgroup(va).subscribe(
      d =>{
        this.currentProduct =  d;
     },
       error => {
         console.log(error);
       }
    );

  });});
}
  else{
    alert("vous avez select 3 jery")
  }
});
alert("Demande envoyée");
}


refuser(id:number,idd:number){
  this.httpService.deletegroupe(id).subscribe();
  return this.router.navigateByUrl("/jury/"+idd);
}


}
