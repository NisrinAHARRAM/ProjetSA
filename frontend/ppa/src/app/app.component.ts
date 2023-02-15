import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Accueil';
  constructor(private titleService:Title, private router: Router){}

  ngOnInit() {
    this.titleService.setTitle(this.title);
  }
  home(){
    this.router.navigate(['home']);
  }

}
