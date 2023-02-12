import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-selectione',
  templateUrl: './selectione.component.html',
  styleUrls: ['./selectione.component.css']
})
export class SelectioneComponent {

  id!:number;
constructor(private httpService: HttpService, private fb: FormBuilder,
  private router: Router,
  private route: ActivatedRoute,) { 
  
}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  }
  goToPage(){
    this.router.navigate(['form-admin']);
  }
  goToPage1(){
    this.router.navigate(['list-email']);
  }

}
