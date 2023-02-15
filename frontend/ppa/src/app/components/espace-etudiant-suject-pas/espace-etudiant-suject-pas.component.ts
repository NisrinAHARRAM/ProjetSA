import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Encadrant } from 'src/app/encadrant';
import { Etudiant } from 'src/app/etudiant';
import { Liste } from 'src/app/liste';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-espace-etudiant-suject-pas',
  templateUrl: './espace-etudiant-suject-pas.component.html',
  styleUrls: ['./espace-etudiant-suject-pas.component.css']
})
export class EspaceEtudiantSujectPasComponent implements OnInit {
  title ='Liste des sujets';
  con=0;
  listOfEtudiants!:Encadrant[];
  id!:number;
  ide!:number;
  constructor(private titleService:Title,private route: ActivatedRoute,private httpService:HttpService,
    private router: Router , ) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    const de=sessionStorage.getItem('idE');
    this.ide = Number(de);


    const dee=sessionStorage.getItem('id');
    this.ide = Number(dee);
    this.httpService.getEmployeeById(this.ide).subscribe(etudiant =>{ this.et = etudiant.filierE
    console.log(this.et)
    
    });
    this.httpService.fetchAllEn().subscribe(etudiant => this.listOfEncadrants = etudiant);

    this.httpService.fetchAllEn().subscribe(etudiant => {this.listOfEtudiants = etudiant;
      for(let et of this.listOfEtudiants){
        for(let list of et.listes){
          for(let val of list.validations){
              this.con++;
          }
        }
      }
      });

    this.titleService.setTitle(this.title);
  }
  
  updateEmployee(){
    const id = this.id;
    console.log(id);
    
    this.router.navigate(['list-sujet']);;
  }
  affiche(){
    this.router.navigate(['list-etudiant-suject', this.id]);
  }
  mod(){
    this.router.navigate(['ajout', this.id]);
  }
  remarque(){
    this.router.navigate(['remarq', this.id]);
  }


  // Hnaaa 


  listOfEncadrants!: Encadrant[];
  etudiant: Etudiant = new Etudiant();
 
  et!:string;
  liste: Liste = new Liste();

  enretudiant(id: number){
    this.id = this.route.snapshot.params['id'];
    console.log(id);
    this.httpService.getListeById(id).subscribe(data => {
      this.liste = data;
      const nbr =Number(this.liste.nbr);
      console.log(nbr);
      if(nbr == 2){
      sessionStorage.setItem('id',this.ide.toString());
      this.router.navigate(['enregistrer-po2', id]);}
      else{
        sessionStorage.setItem('id',this.ide.toString());
        this.router.navigate(['enregistrer-po3', id]);
      }
    });
  
  }

 

}
