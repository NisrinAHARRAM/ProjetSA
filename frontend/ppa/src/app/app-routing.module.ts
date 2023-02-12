import {  createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouteComponent } from './components/ajoute/ajoute.component';
import { AjouterNoteComponent } from './components/ajouter-note/ajouter-note.component';
import { AjoutrendezComponent } from './components/ajoutrendez/ajoutrendez.component';
import { CreateEncadrantComponent } from './components/create-encadrant/create-encadrant.component';
import { CreateListComponent } from './components/create-list/create-list.component';
import { CreateComponent } from './components/create/create.component';
import { CreateencadrantComponent } from './components/createencadrant/createencadrant.component';
import { EncadrantSpaceComponent } from './components/encadrant-space/encadrant-space.component';
import { Enregistrerpo2Component } from './components/enregistrerpo2/enregistrerpo2.component';
import { Enregistrerpo3Component } from './components/enregistrerpo3/enregistrerpo3.component';
import { EspaceDemandeComponent } from './components/espace-demande/espace-demande.component';
import { EspaceEtudiantSujectPasComponent } from './components/espace-etudiant-suject-pas/espace-etudiant-suject-pas.component';
import { EspaceSujectComponent } from './components/espace-suject/espace-suject.component';
import { EtudiantSpaceComponent } from './components/etudiant-space/etudiant-space.component';
import { FormAdminComponent } from './components/form-admin/form-admin.component';
import { FormRemarqComponent } from './components/form-remarq/form-remarq.component';
import { HomeComponent } from './components/home/home.component';
import { InscrireComponent } from './components/inscrire/inscrire.component';
import { LinkDriveComponent } from './components/link-drive/link-drive.component';
import { ListEmailComponent } from './components/list-email/list-email.component';
import { ListJerySujectComponent } from './components/list-jery-suject/list-jery-suject.component';
import { ListSujecEtudiantNonComponent } from './components/list-sujec-etudiant-non/list-sujec-etudiant-non.component';
import { ListSujectEnragistrerComponent } from './components/list-suject-enragistrer/list-suject-enragistrer.component';
import { ListSujectComponent } from './components/list-suject/list-suject.component';
import { ListeJuryComponent } from './components/liste-jury/liste-jury.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { LoginEnComponent } from './components/login-en/login-en.component';
import { LoginEtuComponent } from './components/login-etu/login-etu.component';
import { LoginComponent } from './components/login/login.component';
import { MonprojetComponent } from './components/monprojet/monprojet.component';
import { RemarqComponent } from './components/remarq/remarq.component';
import { SelectDepartementComponent } from './components/select-departement/select-departement.component';
import { SelectEtablissementComponent } from './components/select-etablissement/select-etablissement.component';
import { SelectUniversiteComponent } from './components/select-universite/select-universite.component';
import { SelectioneComponent } from './components/selectione/selectione.component';
import { ShowAllComponent } from './components/show-all/show-all.component';
import { ShowCondaidatComponent } from './components/show-condaidat/show-condaidat.component';
import { ShowListComponent } from './components/show-list/show-list.component';
import { TestComponent } from './components/test/test.component';
import { UpdateEncadrantComponent } from './components/update-encadrant/update-encadrant.component';
import { UpdateComponent } from './components/update/update.component';
import { UpdatteRendezComponent } from './components/updatte-rendez/updatte-rendez.component';
import { ValiderEtudiantComponent } from './components/valider-etudiant/valider-etudiant.component';
import { ValiderJeryComponent } from './components/valider-jery/valider-jery.component';
import { TstComponent } from './tst/tst.component';

const routes: Routes = [
  {path: 'etudiant',component: ShowAllComponent },
  {path:'update/:id', component: UpdateComponent},
  {path:'tst', component: TstComponent},
  {path:'add', component: CreateComponent},
  {path:'Liste/:id', component: CreateListComponent},
  {path: 'encadrants',component: CreateencadrantComponent },
  {path: 'create-encadrant',component:CreateEncadrantComponent},
  {path: 'update-encadrant/:id',component:UpdateEncadrantComponent},
  {path: 'home',component:HomeComponent},
  {path: 'list-sujet',component:ShowListComponent},
  {path: 'inscrire',component:InscrireComponent},
  {path: 'inscrire/create-encadrant',component:CreateEncadrantComponent},
  {path: 'inscrire/create',component:CreateComponent},
  {path: 'encadrant-space/:id',component:EncadrantSpaceComponent},
  {path:'encadrant-space/Liste', component: CreateListComponent},
  {path:'enregistrer-po2/:id', component: Enregistrerpo2Component},
  {path:'enregistrer-po3/:id', component: Enregistrerpo3Component},
  {path:'test/:id', component: TestComponent},
  {path:'show-candaidat/:id', component:ShowCondaidatComponent},
  {path:'login/login-encadrant', component:LoginEnComponent},
  {path:'login-encadrant', component:LoginEnComponent},
  {path:'login/login-etudiant', component:LoginEtuComponent},
  {path:'login-etudiant', component:LoginEtuComponent},
  {path:'etudiant-space/:id', component:EtudiantSpaceComponent},
  {path:'login', component:LoginComponent},
  {path:'ajout/:id', component:AjoutrendezComponent},
  {path:'ajoute/:id', component:AjouteComponent},
  {path:'link/:id', component:LinkDriveComponent},
  {path:'update-rendez/:id', component:UpdatteRendezComponent},
  {path:'jury/:id', component:ListeJuryComponent},
  {path:'remarq/:id', component:RemarqComponent},
  {path:'form/:id', component:FormRemarqComponent},
  {path:'note/:id', component:AjouterNoteComponent},
  {path:'espace-demande/:id', component:EspaceDemandeComponent},
  {path:'valider-etudiant/:id', component:ValiderEtudiantComponent},
  {path:'valider-encadrent/:id', component:ValiderJeryComponent},
  {path:'list-suject/:id', component:ListSujectComponent},
  {path:'espace-suject/:id', component:EspaceSujectComponent},
  {path:'list-jery-suject/:id', component:ListJerySujectComponent},
  {path:'espase-suject-etudiant/:id', component:EspaceEtudiantSujectPasComponent},
  {path:'list-etudiant-suject/:id', component:ListSujectEnragistrerComponent},
  {path:'mon-projet/:id', component:MonprojetComponent},
 {path:'list-jery-suject/:id/:sujet', component:ListJerySujectComponent},
{path:'select-enver', component:SelectUniversiteComponent}, 
{path:'select-etab', component:SelectEtablissementComponent}, 
{path:'select-depatement', component:SelectDepartementComponent}, 
{path:'etudiant-non', component:ListSujecEtudiantNonComponent},
{path:'espace-admin', component:SelectioneComponent},
{path:'login-admin', component:LoginAdminComponent},
{path:'form-admin', component:FormAdminComponent},
{path:'list-email', component:ListEmailComponent},
{ path: '',   redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
