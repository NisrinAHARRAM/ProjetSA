import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Encadrant } from 'src/app/encadrant';
import { Jery } from 'src/app/jery';
import { HttpService } from 'src/app/services/http.service';
import { Validation } from 'src/app/validation';

@Component({
  selector: 'app-ajoutrendez',
  templateUrl: './ajoutrendez.component.html',
  styleUrls: ['./ajoutrendez.component.css']
})
export class AjoutrendezComponent implements OnInit  {
  listOfEtudiants!: Encadrant[];
  id!:number;
  ide!:number;
  selectedvalid!:Encadrant;
  valid!:Validation;
  title = 'Rendez vous';
  private  currentProduct:any;
  constructor(private titleService:Title,private route: ActivatedRoute,private httpService:HttpService,
    private router: Router  ) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.httpService.fetchAllEn().subscribe(etudiant => this.listOfEtudiants = etudiant);
    this.titleService.setTitle(this.title);
  }
  enrer(id:number,idd:number,ide:number){
    console.log(idd);
    sessionStorage.setItem('idD',idd.toString());
    sessionStorage.setItem('idE',ide.toString());
    this.router.navigate(['ajoute', id]);
    console.log(id);
  }
  update(id:number){
    this.router.navigate(['update-rendez', id]);
  }
  accepter(id:number,idd:number,idl:number,idv:number){
    console.log(idv);
    this.httpService.vaByappstring(idv).subscribe(data => {
      this.valid = data;
    this.httpService.EncadrantById(idd).subscribe(data => {
      this.selectedvalid = data;
        console.log( this.valid )
      const va = new Jery();
      va.idE=id;
      va.encadrant=this.selectedvalid;
      va.validation=this.valid;
      this.httpService.addjery(va).subscribe(
        d =>{
          this.currentProduct =  d;
          this.httpService.deletegroupe(idl).subscribe();
       },
         error => {
           console.log(error);
         }
      );
    })
    ;});
  }
  refuser(id:number,idd:number){
    this.httpService.deletegroupe(id).subscribe();
    return this.router.navigateByUrl("/jury/"+idd);
  }

}