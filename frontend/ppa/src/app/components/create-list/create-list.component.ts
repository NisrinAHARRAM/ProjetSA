import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Encadrant } from 'src/app/encadrant';
import { Liste } from 'src/app/liste';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.css']
})
export class CreateListComponent implements OnInit {

  title = 'Ajouter un sujet';
  id!:number;
  selectedId!:number
  listOfEncadrants!: Encadrant[];
  employee: Encadrant = new Encadrant();
  private  currentProduct:any;
  etudiant1!: Encadrant;
  selectedEncadrant!: Encadrant;
  constructor(private titleService:Title,private service:HttpService, private router:Router,private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.service.fetchAllEn().subscribe(etudiant => this.listOfEncadrants = etudiant);
    this.titleService.setTitle(this.title);
  }
  getSelectedEncadrant() {
    this.service.getEncadrantById(this.selectedId).subscribe(data => {
      this.selectedEncadrant = data;
      console.log(this.selectedEncadrant);
    });
  }


  saveProduct(formData: any) {

    console.log("1");
    console.log(this.id);
    console.log("2");
    this.service.getEncadrantById(this.id).subscribe(data => {
      this.selectedEncadrant = data;
      console.log(this.selectedEncadrant);
    
    console.log(this.selectedEncadrant);
    const enregistrer = new Liste();
    enregistrer.sujet = formData.sujet;
    enregistrer.desc = formData.desc;
    enregistrer.nbr = formData.nbr;
    enregistrer.encadrant = this.selectedEncadrant;
  
    this.service.postData(enregistrer).subscribe(d =>{
      this.currentProduct =  d;
      alert("Sujet est bien ajouter");
    return this.router.navigate(['espace-suject',this.id]);
    });});
  }

}
