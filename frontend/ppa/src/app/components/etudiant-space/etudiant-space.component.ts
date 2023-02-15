import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, TitleStrategy } from '@angular/router';
import { Demandv } from 'src/app/demandv';
import { Encadrant } from 'src/app/encadrant';
import { Etudiant } from 'src/app/etudiant';
import { HttpService } from 'src/app/services/http.service';
import { Validation } from 'src/app/validation';

@Component({
  selector: 'app-etudiant-space',
  templateUrl: './etudiant-space.component.html',
  styleUrls: ['./etudiant-space.component.css']
})
export class EtudiantSpaceComponent  implements OnInit {
  title = 'Espace etudiant';
  id!: number;
  listOfEtud!:Etudiant[];
  selectedvalid!:Validation;
  private  currentProduct:any;
  con=0;
  coN2=0;
  con3=0;
  S1=0;
  S2=0;
  S3=0;
  constructor(private titleService:Title,private route: ActivatedRoute,private httpService:HttpService,
    private router: Router  ) { }


    listOfEtudiants!: Encadrant[];


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.httpService.fetchAllEn().subscribe(etudiant =>{ this.listOfEtudiants = etudiant;
    for(let e of this.listOfEtudiants){
      for(let l of e.listes){
        for(let v of l.validations){
          for(let f of v.forms){
            if(f.appogeT2== this.id){
                this.coN2=Number(f.noteP2);
                this.S1=(this.coN2+Number(f.note)+Number(f.notea))/3   
            }
            if(f.appogeT1== this.id){
              this.con=Number(f.noteP1);
              this.S2=(this.con+Number(f.note)+Number(f.notea))/3
          }
          if(f.appogeT3== this.id){
            this.con3=Number(f.noteP3);
            this.S3=(this.con3+Number(f.note)+Number(f.notea))/3
        }
        }
      }

    }
  }
    });
;
this.titleService.setTitle(this.title);
this.httpService.fetchAll().subscribe(etudiant => {this.listOfEtud = etudiant;
});
}
demande(id:number){
  this.httpService.vaByappstring(id).subscribe(data => {
  this.selectedvalid = data;
  console.log('1');
  const va =new Demandv();
  console.log('3');
  console.log(this.selectedvalid);
  va.status="demandez rendez vous";
  va.validation= this.selectedvalid;
  this.httpService.Adddem(va)
      .subscribe(d =>{
         this.currentProduct =  d;
         console.log('2');
         for(let lis of this.listOfEtudiants){
          for(let listeId of lis.listes){
            for(let liste of listeId.validations){
              for(let list of liste.rendez){
              if(liste.appogeT1== this.id || liste.appogeT2==this.id ){
                this.httpService.delete(list.idMatch).subscribe();
              }
              }
            }
          }
         }
      },
        error => {
          console.log(error);
        }
      );
  });

}


  afficherlist(){
    sessionStorage.setItem('id',this.id.toString());
    console.log(this.id)
    //this.router.navigate(['list-sujet']);
    this.router.navigate(['espase-suject-etudiant',this.id]);

  }
  drive(){

    this.router.navigate(['link',this.id]);

  }
 
  valider(id:number){
    this.httpService.vaByappstring(id).subscribe(data => {
      this.selectedvalid = data;
      console.log('1');
      const va =new Demandv();
      console.log('3');
      console.log(this.selectedvalid);
      va.status="nous avons terminer le project";
      va.validation= this.selectedvalid;
      this.httpService.Adddem(va)
          .subscribe(d =>{
             this.currentProduct =  d;
             console.log('2');
             for(let lis of this.listOfEtudiants){
              for(let listeId of lis.listes){
                for(let liste of listeId.validations){
                  for(let dem of liste.demandvs){
                    if(liste.appogeT1== this.id || liste.appogeT2==this.id || liste.appogeT3==this.id  ){
                      if(dem.status.match("je valide")){
                      this.httpService.deletedm(dem.idD).subscribe();
                    }}
                  }
                  for(let list of liste.rendez){
                  if(liste.appogeT1== this.id || liste.appogeT2==this.id || liste.appogeT3==this.id ){
                    this.httpService.delete(list.idMatch).subscribe();
                  }
              }
                }
              }
             }
          },
            error => {
              console.log(error);
            }
          );
      });
  }

  valdate(id:number){
    this.httpService.vaByappstring(id).subscribe(data => {
      this.selectedvalid = data;
      console.log('1');
      const va =new Demandv();
      console.log('3');
      console.log(this.selectedvalid);
      va.status="je valide";
      va.validation= this.selectedvalid;
      this.httpService.Adddem(va)
          .subscribe(d =>{
             this.currentProduct =  d;
             console.log('2');

          },
            error => {
              console.log(error);
            }
          );
      });
    

  }
  Add(id1:number,id2:number,id3:number){
    return (id1+id2+id3)/3
  }
  gotopro(){
    this.router.navigate(['mon-projet', this.id]);
  }
}
