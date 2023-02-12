import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Encadrant } from 'src/app/encadrant';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-update-encadrant',
  templateUrl: './update-encadrant.component.html',
  styleUrls: ['./update-encadrant.component.css']
})
export class UpdateEncadrantComponent {

  id!: number;
  encadrant: Encadrant = new Encadrant();
  constructor(private  httpService: HttpService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.httpService.getEncadrantById(this.id).subscribe(data => {
      this.encadrant = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.httpService.updateEncadrant(this.id, this.encadrant).subscribe( data =>{
      this.goToEncadrantList();
    }
    , error => console.log(error));
  }

  goToEncadrantList(){
    this.router.navigate(['/encadrants']);
  }


}
