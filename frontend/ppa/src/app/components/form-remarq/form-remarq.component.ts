import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Etudiant } from 'src/app/etudiant';
import { Form } from 'src/app/form';
import { HttpService } from 'src/app/services/http.service';
import { Validation } from 'src/app/validation';

@Component({
  selector: 'app-form-remarq',
  templateUrl: './form-remarq.component.html',
  styleUrls: ['./form-remarq.component.css']
})
export class FormRemarqComponent  implements OnInit {
  title = 'Ajouter une remarque';
  id!:number;
  valid!:Validation;
  ide!:number;
  appno3!:Etudiant;
  appno2!:Etudiant;
  appno1!:Etudiant;
  private  currentProduct:any;
  constructor( private titleService:Title,private route: ActivatedRoute,private httpService:HttpService,
    private router: Router , ) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    const de=sessionStorage.getItem('idE');
    this.ide = Number(de);
    this.httpService.vaByappstring(this.ide).subscribe(data => {
      this.valid = data;  
      console.log(this.valid.appogeT1 );
      this.httpService.getEmployeeById(this.valid.appogeT1).subscribe(data => {
        this.appno1 = data;
      
      console.log(this.valid.appogeT2 );
      this.httpService.getEmployeeById(this.valid.appogeT2).subscribe(data => {
          this.appno2 = data;
        
      if(this.valid.appogeT1!=null){
      this.httpService.getEmployeeById(this.valid.appogeT3).subscribe(data => {
            this.appno3 = data;
          });}
        });
        });
      });
      this.titleService.setTitle(this.title);
}

ajouter(f:any){
  this.httpService.vaByappstring(this.ide).subscribe(data => {
    this.valid = data; 
    const va =new Form();
    va.appogeT1=this.valid.appogeT1;
    va.appogeT2=this.valid.appogeT2;
    va.appogeT3=this.valid.appogeT3;
    va.nomET1=f.remarque1;
    va.nomET2=f.remarque2;
    va.nomET3=f.remarque3;
    va.noteP1=f.pre1;
    va.noteP2=f.pre2;
    va.noteP3=f.pre3;
    va.note=f.note;
    va.notea=f.notea;
    va.validation=this.valid;
    this.httpService.addfrom(va).subscribe(d =>{
      this.currentProduct =  d;
      alert("Les remarques son envoye")
      return this.router.navigateByUrl("/remarq/"+this.id);
  });});
}
}