import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Encadrant } from 'src/app/encadrant';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-remarq',
  templateUrl: './remarq.component.html',
  styleUrls: ['./remarq.component.css']
})
export class RemarqComponent implements OnInit  {

  title = 'Les remarques';
  listOfEtudiants!: Encadrant[];
  id!:number;
  constructor(private titleService:Title,private route: ActivatedRoute,private httpService:HttpService,
    private router: Router  ) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.httpService.fetchAllEn().subscribe(etudiant => this.listOfEtudiants = etudiant);
    this.titleService.setTitle(this.title);
  }
  ajoute(ide:number){
    sessionStorage.setItem('idE',ide.toString());
    this.router.navigate(['form', this.id]);
  }

}
