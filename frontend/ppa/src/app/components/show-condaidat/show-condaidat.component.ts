import { Component ,OnInit} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Encadrant } from 'src/app/encadrant';
import { EnregistrerPo } from 'src/app/enregistrer-po';
import { Etudiant } from 'src/app/etudiant';
import { Liste } from 'src/app/liste';
import { Publie } from 'src/app/publie';
import { HttpService } from 'src/app/services/http.service';
import { Validation } from 'src/app/validation';

@Component({
  selector: 'app-show-condaidat',
  templateUrl: './show-condaidat.component.html',
  styleUrls: ['./show-condaidat.component.css']
})
export class ShowCondaidatComponent implements OnInit{


  title = 'La liste des condaidats';
  id!: number;
  selected!:EnregistrerPo;
  private  currentProduct:any;
  select!:EnregistrerPo[];
  sel!:EnregistrerPo;
  selec!:Validation[];
  app!:string;
  lis!:Liste;
  listess!:EnregistrerPo[];
  enn!:number;
  selecte!:Validation;
  constructor(private titleService:Title,private httpService: HttpService, private fb: FormBuilder,private router: Router,private route: ActivatedRoute,) { 
  
  }
  listOfEtudiants!: Encadrant[];
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.httpService.fetchAllEn().subscribe(etudiant => this.listOfEtudiants = etudiant);
    this.httpService.fetchre().subscribe(etudiant => this.listess = etudiant);
    

      // this.selec.status;
    
;
this.titleService.setTitle(this.title);
}
enregister(id:number,app:number,app2:number,app3:number,no1:string,no2:string,no3:string,liste:Liste){
  const va =new Validation();
  va.appogeT1=app;
  va.appogeT2=app2;
  va.appogeT3=app3;
  va.nomET1=no1;
  va.nomET2=no2;
  va.nomET3=no3
  va.liste=liste;
  this.httpService.postDt(va).subscribe(d =>{
    this.currentProduct =  d;
    this.httpService.deleteEnapp(app).subscribe(); 
    return this.router.navigate(['show-condaidat', this.id])
  },
  error => {
    console.log(error);
  });


}
refuse(id:number){
  console.log(id);
  this.httpService.deleteEn(id).subscribe(); 
}
jeru(ide:number){
  sessionStorage.setItem('idE',ide.toString());
  console.log(ide);
  this.router.navigate(['jury', this.id]);
}
note(id:number,idd:number){
  sessionStorage.setItem('idE',idd.toString());
  console.log(idd);
  this.router.navigate(['note', this.id]);
}
publie(id:string,idd:number){
  this.httpService.vaByappstring(idd).subscribe(data => {
    this.selecte = data;
    const va= new Publie();
    va.link=id;
    va.validation=this.selecte;
    this.httpService.addpublie(va).subscribe(d =>{
        this.currentProduct =  d;
    alert("vous avez publie le lien avec les jery");}
    );
  });
}
lste(id:number,sujet:string){
  this.router.navigate(['list-jery-suject',id,sujet]);
}

}
