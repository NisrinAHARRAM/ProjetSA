import { Component } from '@angular/core';
import { FormBuilder,Validators, FormGroup } from '@angular/forms';
import { Etudiant } from '../etudiant';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-tst',
  templateUrl: './tst.component.html',
  styleUrls: ['./tst.component.css']
})
export class TstComponent {
confirm:any;
public login!:Etudiant;
constructor(){
  this.login=new Etudiant;
}

}
