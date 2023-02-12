import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-inscrire',
  templateUrl: './inscrire.component.html',
  styleUrls: ['./inscrire.component.css']
})
export class InscrireComponent {
  title ='Inscreption';
  constructor(private titleService:Title){}
  ngOnInit() {
    this.titleService.setTitle(this.title);
  }

}
