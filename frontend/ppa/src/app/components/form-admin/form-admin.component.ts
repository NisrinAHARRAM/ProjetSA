import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Admin } from 'src/app/admin';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-form-admin',
  templateUrl: './form-admin.component.html',
  styleUrls: ['./form-admin.component.css']
})
export class FormAdminComponent implements OnInit {
  private  currentProduct:any;
  constructor(private httpService: HttpService, private fb: FormBuilder,
  private router: Router,
  private route: ActivatedRoute,) { 
  
}
  ngOnInit(): void {
    
  }
  onSubmit(f:any){
    console.log(f.idun);
    console.log(f.nomUn);
    console.log(f.encadrentUn);
    console.log(f.etudiantUn);
    const va= new Admin();
    va.idun=f.idun;
    va.nomUn=f.nomUn;
    va.encadrentUn=f.encadrentUn;
    va.etudiantUn=f.etudiantUn;
    this.httpService.addfromadm(va).subscribe(d =>{
      this.currentProduct =  d;
      this.router.navigate(['list-email'])}
    );
  }
}
