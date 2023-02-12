import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-espace-demande',
  templateUrl: './espace-demande.component.html',
  styleUrls: ['./espace-demande.component.css']
})
export class EspaceDemandeComponent implements OnInit {
  title = 'Les demandes';
  id!:number;
  constructor(private titleService:Title,private route: ActivatedRoute,private httpService:HttpService,
    private router: Router , ) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.titleService.setTitle(this.title);
  }
  
  updateEmployee(){
    const id = this.id;
    console.log(id);

    this.router.navigate(['valider-encadrent', this.id]);
  }
  affiche(){
    this.router.navigate(['valider-etudiant', this.id]);
  }
  mod(){
    this.router.navigate(['ajout', this.id]);
  }
  remarque(){
    this.router.navigate(['remarq', this.id]);
  }

  affichecon(){
    this.router.navigate(['show-candaidat', this.id]);
  }
  remarque2(){
    this.router.navigate(['remarq', this.id]);
  }
  suject(){
    this.router.navigate(['espace-suject', this.id]);
  }
  demande(){
    this.router.navigate(['espace-demande', this.id]);
  }
  home(){
    this.router.navigate(['encadrant-space', this.id]);
  }

}

