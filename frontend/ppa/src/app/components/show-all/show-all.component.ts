import { Component, Input, OnInit } from '@angular/core';
import { Etudiant } from 'src/app/etudiant';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-show-all',
  templateUrl: './show-all.component.html',
  styleUrls: ['./show-all.component.css']
})
export class ShowAllComponent implements OnInit {
  confirm:any;
  public login!:Etudiant;
 
// public passwordValidation!:"";
  constructor(private httpService: HttpService, private fb: FormBuilder,private router: Router) { 
    this.login=new Etudiant;
  }
  listOfEtudiants!: Etudiant[];
  etudiantForm!: FormGroup;
  confirmpass:any;
  show = false;

  ngOnInit(): void {
    this.httpService.fetchAll().subscribe(etudiant => this.listOfEtudiants = etudiant);

    this.etudiantForm = this.fb.group({
      appoge: [''],
      nomE: [''],
      prenomE: [''],
      filierE: [''],
      emaiE: [''],
      motpasE: [''],
    });
  }
  private getEmployees(){
    this.httpService.getEmployeesList().subscribe(data => {
      this.listOfEtudiants = data;
    });}

  handelSubmit() {
    this.httpService.addEtudiant(this.etudiantForm.value).subscribe();
    this.getEmployees();
    
  }
 
  showAddEtudiant() {
    this.show = !this.show;
  }


  deleteEmployee(id: number){
    this.httpService.deleteEmployee(id).subscribe( data => {
      console.log(data);
      this.getEmployees();
    })
  }
  updateEmployee(id: number){
    this.router.navigate(['update', id]);
  }
  create(){
    this.router.navigate(['add']);
  }
}
