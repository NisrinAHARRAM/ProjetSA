import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Etudiant } from 'src/app/etudiant';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  login: Etudiant = new Etudiant();
  title = 'Inscreption';
  confirm:any;
  constructor(private titleService:Title,private employeeService: HttpService,
    private router: Router) { }
  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }

  saveEmployee(){
   
      this.employeeService.createEmployee(this.login).subscribe( data =>{
        console.log(data);
        this.goToEmployeeList();
    },
     error => console.log(error));
    
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }
  
  onSubmit(f:any){
    if((f.appoge!=null)&&(f.nomE!=null)&&(f.prenomE!=null)&&(f.filierE!=null)&&(f.emaiE!=null)&&(f.motpasE!=null)){
      let pattern = /.+@etu.uae.ac.ma/; 
      if(f.emaiE.match(pattern)){
      console.log(this.login);
      this.saveEmployee();
      this.router.navigate(['login-etudiant'])}
      else{
        alert("email n'est pas institutionnel");
        this.router.navigate(['add']);
      }}
    
    else{
      this.router.navigate(['add'])
    }
    }
      
 
}
