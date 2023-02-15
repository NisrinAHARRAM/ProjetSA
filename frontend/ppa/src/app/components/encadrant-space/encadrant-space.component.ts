import { Component,OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Encadrant } from 'src/app/encadrant';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-encadrant-space',
  templateUrl: './encadrant-space.component.html',
  styleUrls: ['./encadrant-space.component.css']
})
export class EncadrantSpaceComponent implements OnInit {
  title = 'Espace encadrant';
  listOfEtudiants!:Encadrant[]
  id!:number;
  constructor(private titleService:Title,private route: ActivatedRoute,private httpService:HttpService,
    private router: Router , ) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.titleService.setTitle(this.title);
    this.httpService.fetchAllEn().subscribe(etudiant => {this.listOfEtudiants = etudiant;
    });
    }
  
  updateEmployee(){
    const id = this.id;
    console.log(id);

    this.router.navigate(['Liste', this.id]);
  }
  affiche(){
    this.router.navigate(['show-candaidat', this.id]);
  }
  mod(){
    this.router.navigate(['ajout', this.id]);
  }
  remarque(){
    this.router.navigate(['remarq', this.id]);
  }
  demande(){
    this.router.navigate(['espace-demande', this.id]);
  }
  suject(){
    this.router.navigate(['espace-suject', this.id]);
  }
}
