import { Component,OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Encadrant } from 'src/app/encadrant';
import { Etudiant } from 'src/app/etudiant';
import { Liste } from 'src/app/liste';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit{


  constructor(private httpService: HttpService, private fb: FormBuilder,private router: Router,private route: ActivatedRoute) { 
  
  }
  listOfEncadrants!: Encadrant[];
  etudiant: Etudiant = new Etudiant();
  id!: number;
  ide!:number;
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

  ngOnInit(): void {
    const de=sessionStorage.getItem('id');
    this.ide = Number(de);
    this.httpService.getEmployeeById(this.ide).subscribe(etudiant =>{ this.et = etudiant.filierE
    console.log(this.et)
    
    });
    this.httpService.fetchAllEn().subscribe(etudiant => this.listOfEncadrants = etudiant);
}


}
