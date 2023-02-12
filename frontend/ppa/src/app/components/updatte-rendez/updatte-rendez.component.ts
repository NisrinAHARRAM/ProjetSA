import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Rendezvous } from 'src/app/rendezvous';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-updatte-rendez',
  templateUrl: './updatte-rendez.component.html',
  styleUrls: ['./updatte-rendez.component.css']
})
export class UpdatteRendezComponent implements OnInit  {
  title = 'Modifier le rendez vous';
  id!:number;
  employee!:Rendezvous;
  constructor(private titleService:Title,private  httpService: HttpService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.httpService.getrendez(this.id).subscribe(data => {
      this.employee = data;
    }, error => console.log(error));
    this.titleService.setTitle(this.title);
  }
  update(){
    this.httpService.updateRendz(this.id, this.employee).subscribe( );
    return this.router.navigateByUrl("/ajout/"+this.id);

  }
}
