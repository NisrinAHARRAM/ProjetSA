import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Etudiant } from 'src/app/etudiant';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-login-etu',
  templateUrl: './login-etu.component.html',
  styleUrls: ['./login-etu.component.css']
})
export class LoginEtuComponent  implements OnInit {
  title = 'Coonnexion';
  listOfEtudiants!: Etudiant[];
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
    this.httpService.fetchAll().subscribe(
      etudiant =>{
        this.listOfEtudiants = etudiant
      for(let i of this.listOfEtudiants ){
        if((i.emaiE==f.email)&&(i.motpasE ==  f.password)){
          if(i.enabled==true){
          this.httpService.getAppogeByEmail(i.emaiE).subscribe(
            etudiant =>{
              this.idd = etudiant
          this.router.navigate(['etudiant-space', this.idd]);});
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
  }
  );
  }
}
// export class LoginEtuComponent  implements OnInit {
//   listOfEtudiants!: Etudiant[];
//   idd!:number;
//   constructor(private httpService: HttpService, private fb: FormBuilder,private router: Router,private route: ActivatedRoute,) { 
  
//   }
//   ngOnInit(): void {
    
//   }
  

//   saveProduct(f:any){
//     this.httpService.fetchAll().subscribe(
//       etudiant =>{
//         this.listOfEtudiants = etudiant
//       for(let i of this.listOfEtudiants ){
//         if((i.emaiE==f.email)&&(i.motpasE ==  f.password)){
//           this.httpService.getAppogeByEmail(i.emaiE).subscribe(
//             etudiant =>{
//               this.idd = etudiant
//           this.router.navigate(['etudiant-space', this.idd]);});
//         }
//         // else{
//         //   alert("email or mot pass un correcte");
//         // }
//       }
//   }
//   );
//   }
// }
