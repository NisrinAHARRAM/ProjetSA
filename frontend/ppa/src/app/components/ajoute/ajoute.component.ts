import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Encadrant } from 'src/app/encadrant';
import { Rendezvous } from 'src/app/rendezvous';
import { HttpService } from 'src/app/services/http.service';
import { Validation } from 'src/app/validation';

@Component({
  selector: 'app-ajoute',
  templateUrl: './ajoute.component.html',
  styleUrls: ['./ajoute.component.css']
})
export class AjouteComponent implements OnInit{
  selected!:Validation;
  id!:number;
  idd!:number;
  ide!:number;
  title="Rendez vous"
  private  currentProduct:any;
  
  listOfEtudiants!: Encadrant[];
  constructor(private titleService:Title,private httpService: HttpService, private fb: FormBuilder,private router: Router,private route: ActivatedRoute,) { }
    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.httpService.fetchAllEn().subscribe(etudiant => this.listOfEtudiants = etudiant);
      const dg=sessionStorage.getItem('idD');
      const de=sessionStorage.getItem('idE');
      this.idd = Number(dg);
      this.ide = Number(de);
      console.log(this.ide)
      this.titleService.setTitle(this.title);
    }
    saverandez(f:any){
   this.httpService.vaByappstring(this.id).subscribe(data => {
    console.log("1");
    this.selected = data;
    const va =new Rendezvous();
    va.date=f.date;
    va.heure=f.heure;
    va.validation=this.selected;
    console.log(f.heure);
    this.httpService.addrendez(va).subscribe(d =>{
      this.currentProduct =  d;
      console.log("1");
      for(let lis of this.listOfEtudiants){
        for(let listeId of lis.listes){
          for(let liste of listeId.validations){
            for(let list of liste.demandvs){
            if(list.idD== this.idd && list.status=="La demande d'un R-V"){
             this.httpService.deletedm(this.idd).subscribe();
            }
            if(list.idD== this.idd && list.status=="je valide"){
              this.httpService.deletedm(this.idd).subscribe();
             }
          }}}}
      console.log("2");
      alert("Le rendez-vous a été envoyé")
      return this.router.navigateByUrl("/ajout/"+this.ide);
    });
  });
  } }

