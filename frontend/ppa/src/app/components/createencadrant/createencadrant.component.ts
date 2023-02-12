import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Encadrant } from 'src/app/encadrant';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-createencadrant',
  templateUrl: './createencadrant.component.html',
  styleUrls: ['./createencadrant.component.css']
})
export class CreateencadrantComponent {


  confirm:any;
  public login!:Encadrant;
 
// public passwordValidation!:"";
  constructor(private httpService: HttpService, private fb: FormBuilder,private router: Router) { 
    this.login=new Encadrant;
  }
  listOfEncadrants!: Encadrant[];
  encadrantForm!: FormGroup;
  confirmpass:any;
  show = false;

  ngOnInit(): void {
    this.httpService.fetchAllEn().subscribe(encadrant => this.listOfEncadrants = encadrant);

    this.encadrantForm = this.fb.group({
      appoge: [''],
      nomE: [''],
      prenomE: [''],
      filierE: [''],
      emaiE: [''],
      motpasE: [''],
    });
  }
  private getEncadrants(){
    this.httpService.getEncadrantsList().subscribe(data => {
      this.listOfEncadrants = data;
    });}

  handelSubmit() {
    this.httpService.createEncadrant(this.encadrantForm.value).subscribe();
    this.getEncadrants();
    this.router.navigate(['createncadrant']);
    
  }
 
  showAddEncadrant() {
    this.show = !this.show;
  }


  deleteEncadrant(id: number){
    this.httpService.deleteEncadrant(id).subscribe( data => {
      console.log(data);
      this.getEncadrants();
    })
  }
  updateEncadrant(id: number){
    this.router.navigate(['update-encadrant', id]);
  }
  createEn(){
    this.router.navigate(['create-encadrant']);
  }

}
