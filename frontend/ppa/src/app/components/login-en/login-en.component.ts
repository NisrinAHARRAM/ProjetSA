import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Encadrant } from 'src/app/encadrant';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-login-en',
  templateUrl: './login-en.component.html',
  styleUrls: ['./login-en.component.css']
})

export class LoginEnComponent implements OnInit {
  title = 'Connexion';
  listOfEtudiants!: Encadrant[];
  idd!:number;
  invalidCredentials = false;
  loginSuccess = false;
  errorMessage = 'infos incorrectes ou se email ne pas verfier!';
  constructor(private titleService:Title,private httpService: HttpService, private fb: FormBuilder,private router: Router,private route: ActivatedRoute,) { 
  
  }
  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }
  
  saveProduct(f:any){
    this.httpService.fetchAllEn().subscribe(
      etudiant =>{
        this.listOfEtudiants = etudiant
        for(let i of this.listOfEtudiants ){
          if((i.email==f.email)&&(i.password==  f.password)){
            if(i.enabled==true){
            this.router.navigate(['encadrant-space', i.id]);
          }
            else{
              this.invalidCredentials = true;
              this.loginSuccess = false
            }
        
        }
        else{
          this.invalidCredentials = true;
          this.loginSuccess = false;
        }

      }
      });
 
}}
// export class LoginEnComponent implements OnInit {
//   listOfEtudiants!: Encadrant[];
//   idd!:number;
//   constructor(private httpService: HttpService, private fb: FormBuilder,private router: Router,private route: ActivatedRoute,) { 
  
//   }
//   ngOnInit(): void {
    
//   }
  
//   saveProduct(f:any){
//     this.httpService.fetchAllEn().subscribe(
//       etudiant =>{
//         this.listOfEtudiants = etudiant
//       for(let i of this.listOfEtudiants ){
//         if((i.email==f.email)&&(i.password==f.password)){
//           this.httpService.getidByEmail(i.email).subscribe(
//             etudiant =>{
//               this.idd = etudiant
//           return this.router.navigate(['encadrant-space', this.idd]);});
//         }
//       }  
//   }
//   );
//   //alert("email or mot pass un correcte");
//   }
// }
