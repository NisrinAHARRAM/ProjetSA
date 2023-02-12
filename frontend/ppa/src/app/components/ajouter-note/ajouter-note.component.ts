import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Encadrant } from 'src/app/encadrant';
import { Note } from 'src/app/note';
import { HttpService } from 'src/app/services/http.service';
import { Validation } from 'src/app/validation';

@Component({
  selector: 'app-ajouter-note',
  templateUrl: './ajouter-note.component.html',
  styleUrls: ['./ajouter-note.component.css']
})
export class AjouterNoteComponent implements OnInit {
  id!: number;
  ide!:number;
  selectedvalid!:Encadrant;
  valid!:Validation;
  selected!:Validation;
  title = 'Ajouter une note';
  private  currentProduct:any;

  constructor( private titleService:Title,private route: ActivatedRoute,private httpService:HttpService,
    private router: Router  ) { }


    listOfEtudiants!: Encadrant[];


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.httpService.fetchAllEn().subscribe(etudiant => this.listOfEtudiants = etudiant);
    const de=sessionStorage.getItem('idE');
    this.ide = Number(de);
    console.log(this.ide);
    this.titleService.setTitle(this.title);
}
ajoutenote(f:any){
  console.log(this.ide);
  this.httpService.vaByappstring(this.ide).subscribe(data => {
    this.selected = data;
    console.log(this.selected);
    console.log(f.not);
    const va= new Note();
    va.note=f.not;
    va.validation=this.selected;
    this.httpService.note(va).subscribe(d =>{
        this.currentProduct =  d;
      this.router.navigate(['show-candaidat', this.id])}
    );
});
}
}
