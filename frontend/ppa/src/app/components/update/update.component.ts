import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Etudiant } from 'src/app/etudiant';
import { HttpService } from './../../services/http.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit  {

  // todoToBeUpdated!: Etudiant;

  // updatedForm!: FormGroup;

  // show: boolean = false;

  // constructor(private httpService: HttpService, private fb: FormBuilder, private rout: ActivatedRoute) { }

  // ngOnInit(): void {
  //   const id = this.rout.snapshot.paramMap.get('id');
  //   const idd=Number(id);
  //   this.httpService.findById(idd).subscribe(todo => this.todoToBeUpdated = todo);


  //   this.updatedForm = this.fb.group({
  //     appoge: [''],
  //     nomE: [''],
  //     prenomE: [''],
  //     filierE: [''],
  //     emaiE: [''],
  //     motpasE: [''],
  //   });
  // }



  // handelSubmitUpdate() {
  //   this.httpService.update(this.todoToBeUpdated.appoge, this.updatedForm.value).subscribe();
  // }



  // update() {
  //   this.updatedForm.setValue({
  //     appoge: this.todoToBeUpdated.appoge,
  //     nomE: this.todoToBeUpdated.nomE,
  //     prenomE: this.todoToBeUpdated.prenomE,
  //     filierE: this.todoToBeUpdated.filierE,
  //     emaiE: this.todoToBeUpdated.emaiE,
  //     motpasE: this.todoToBeUpdated.motpasE,
  //   });

  //   this.show = !this.show;

  // }













 
  id!: number;
  employee: Etudiant = new Etudiant();
  constructor(private  httpService: HttpService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.httpService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.httpService.updateEmployee(this.id, this.employee).subscribe( data =>{
      this.goToEmployeeList();
    }
    , error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/etudiant']);
  }

}
