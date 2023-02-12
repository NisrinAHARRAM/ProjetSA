import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { DriveLink } from 'src/app/driveLink';
import { Encadrant } from 'src/app/encadrant';
import { HttpService } from 'src/app/services/http.service';
import { Validation } from 'src/app/validation';

@Component({
  selector: 'app-link-drive',
  templateUrl: './link-drive.component.html',
  styleUrls: ['./link-drive.component.css']
})
export class LinkDriveComponent implements OnInit{
  title = 'Lien de drive';
  listOfEtudiants!: Encadrant[];
  id!: number;
  selectedvalid!:Validation;
  private  currentProduct:any;
  constructor(private titleService:Title,private route: ActivatedRoute,private httpService:HttpService,
    private router: Router  ) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.httpService.fetchAllEn().subscribe(etudiant => this.listOfEtudiants = etudiant);
    this.titleService.setTitle(this.title);
  }
  saverandez(f:any){
    for(let lis of this.listOfEtudiants){
      for(let list of lis.listes){
        for(let li of list.validations){
          if((this.id==li.appogeT1)|| (this.id==li.appogeT2)||(this.id==li.appogeT3)){
            this.httpService.vaByappstring(li.idv).subscribe(data => {
              this.selectedvalid = data;
              const va = new DriveLink()
              va.link=f.link;
              va.validation=this.selectedvalid;
              this.httpService.addlink(va).subscribe(d =>{
                this.currentProduct =  d;
                alert("Le lien a ete envoyer")
              return this.router.navigateByUrl("mon-projet/"+this.id);
            }); 
          });  
          }
        }
      }
    }

  }
}
