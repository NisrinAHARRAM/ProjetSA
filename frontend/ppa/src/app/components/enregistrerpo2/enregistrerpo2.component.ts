import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { EnregistrerPo } from 'src/app/enregistrer-po';
import { Liste } from 'src/app/liste';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-enregistrerpo2',
  templateUrl: './enregistrerpo2.component.html',
  styleUrls: ['./enregistrerpo2.component.css']
})
export class Enregistrerpo2Component {
  title = "Page de l'enregistrement";
    id!: number;
    liste: Liste = new Liste();
    selected!: Liste;
  coont=0;
  ide!:number;
  select!:EnregistrerPo[];
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
      if((formData.appo3==null)&&(formData.nom3==null)){
          const enregistrer = new EnregistrerPo();
          enregistrer.appogeT1 = formData.appo1;
          enregistrer.nomET1 = formData.nom1;
          enregistrer.appogeT2 = formData.appo2;
          enregistrer.nomET2 = formData.nom2;
          enregistrer.liste = this.selected;
          this.httpService.postD(enregistrer).subscribe(d =>{
            this.currentProduct =  d;
  alert("Le sujet a été enregistré avec succès");
  return this.router.navigateByUrl("/etudiant-space/"+this.ide)
 // this.router.navigate(['list-sujet', this.id])
},

           error => {
             console.log(error);
  }
);
  }
});
  }
  else{
    alert("vous avez enregester dans 3 sujet qui autorise")
  }
  });
    });
 }

}
