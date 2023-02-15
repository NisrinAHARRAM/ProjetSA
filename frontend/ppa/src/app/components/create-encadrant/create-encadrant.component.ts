import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Encadrant } from 'src/app/encadrant';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-create-encadrant',
  templateUrl: './create-encadrant.component.html',
  styleUrls: ['./create-encadrant.component.css']
})
export class CreateEncadrantComponent {
  title = 'Inscreption';

  encadrant: Encadrant = new Encadrant();
  constructor(private titleService:Title,private encadrantService: HttpService,
    private router: Router){}

  ngOnInit(): void{
    this.titleService.setTitle(this.title);
  }
  saveEncadrat(){
    this.encadrantService.createEncadrant(this.encadrant).subscribe(data =>{
      console.log(data);
      this.goToEncadratList();
    },
    error => console.log(error));
  }

/*  goToEncadratList(){
    this.router.navigate(['/encadrants']);
  }*/

    goToEncadratList(){
    // this.router.navigate(['/encadrant-space']);
    this.router.navigate(['/login-encadrant']);
  }


    onSubmit(f:any){
    if((f.nom!=null)&&(f.prenom!=null)&&(f.email!=null)&&(f.password!=null)&&(f.departement!=null)&&(f.id!=null)){
      let pattern = /.+@uae.ac.ma/; 
      if(f.email.match(pattern)){
      console.log(this.encadrant);
      this.saveEncadrat();
      this.goToEncadratList();
      const id = this.encadrant.id;
      console.log(f.id);
      this.router.navigate(['login-encadrant'])
    console.log(f.id);}
    else{
      alert("email n'est pas institutionnel");
      this.router.navigate(['create-encadrant']);
    }
    }

    else{
      this.router.navigate(['create-encadrant'])
    }
    }

  // onSubmit(f:any){
  //   if((f.nom!=null)&&(f.prenom!=null)&&(f.email!=null)&&(f.password!=null)&&(f.departement!=null)&&(f.id!=null)){
  //     let pattern = /.+@uae.ac.ma/; 
  //     if(f.email.match(pattern)){
  //     console.log(this.encadrant);
  //     this.saveEncadrat();
  //     this.goToEncadratList();
  //     const id = this.encadrant.id;
  //     console.log(f.id);
  //     this.router.navigate(['encadrant-space',f.id])
  //   console.log(f.id);}
  //   else{
  //     alert("email n'est pas institutionnel");
  //     this.router.navigate(['create-encadrant']);
  //   }
  //   }

  //   else{
  //     this.router.navigate(['create-encadrant'])
  //   }
  //   }
  }


