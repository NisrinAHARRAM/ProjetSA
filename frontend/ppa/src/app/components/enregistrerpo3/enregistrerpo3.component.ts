import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { EnregistrerPo } from 'src/app/enregistrer-po';
import { Liste } from 'src/app/liste';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-enregistrerpo3',
  templateUrl: './enregistrerpo3.component.html',
  styleUrls: ['./enregistrerpo3.component.css']
})
export class Enregistrerpo3Component {
  title = "Page de l'enregistement";
    id!: number;
    liste: Liste = new Liste();
    selected!: Liste;
  coont=0;
  select!:EnregistrerPo[];
  ide!:number;

    private  currentProduct:any;
    constructor(private titleService:Title,private  httpService: HttpService,
      private route: ActivatedRoute,
      private router: Router) { }
  
    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
  
      this.httpService.getListeById(this.id).subscribe(data => {
        this.liste = data;
      }, error => console.log(error));
      const de=sessionStorage.getItem('id');
     this.ide = Number(de);
     console.log(this.ide);
     this.titleService.setTitle(this.title);
    }
    saveProduct(formData: any) {

    this.httpService.getenByapp(formData.appo1).subscribe(data => {
      this.select = data;
    for(let i of this.select){
      this.coont++;
    }
      this.httpService.getListeById(this.id).subscribe(data => {
        this.selected = data;
        console.log(this.selected);
  console.log(this.coont);
  if(this.coont<=2){
  
      this.httpService.getListeById(this.id).subscribe(data => {
        this.selected = data;
        console.log(this.selected);
          const enregistrer = new EnregistrerPo();
          enregistrer.appogeT1 = formData.appo1 ;
          enregistrer.nomET1= formData.nom1 ;
          enregistrer.appogeT2 = formData.appo2;
          enregistrer.nomET2 = formData.nom2;
          enregistrer.appogeT3 = formData.appo3;
          enregistrer.nomET3 = formData.nom3;
          enregistrer.liste = this.selected;
          this.httpService.postD(enregistrer).subscribe(d =>{
            this.currentProduct =  d;
  alert("Le sujet a été enregistré avec succès");
  return this.router.navigateByUrl("/etudiant-space/"+this.ide)},
           error => {
             console.log(error);
  
  });
});
}
else{
  alert("vous avez enregester dans 3 sujet qui autorise")
}
});

    });
}

}
