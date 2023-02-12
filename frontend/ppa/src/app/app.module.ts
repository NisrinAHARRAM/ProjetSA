import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { ShowAllComponent } from './components/show-all/show-all.component';
import { UpdateComponent } from './components/update/update.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TstComponent } from './tst/tst.component';
import { CreateComponent } from './components/create/create.component';
import { CreateListComponent } from './components/create-list/create-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CreateencadrantComponent } from './components/createencadrant/createencadrant.component';
import { UpdateEncadrantComponent } from './components/update-encadrant/update-encadrant.component';
import { CreateEncadrantComponent } from './components/create-encadrant/create-encadrant.component';
import { HomeComponent } from './components/home/home.component';
import { ShowListComponent } from './components/show-list/show-list.component';
import { InscrireComponent } from './components/inscrire/inscrire.component';
import { EncadrantSpaceComponent } from './components/encadrant-space/encadrant-space.component';
import { Enregistrerpo2Component } from './components/enregistrerpo2/enregistrerpo2.component';
import { Enregistrerpo3Component } from './components/enregistrerpo3/enregistrerpo3.component';
import { TestComponent } from './components/test/test.component';
import { ShowCondaidatComponent } from './components/show-condaidat/show-condaidat.component';
import { LoginEtuComponent } from './components/login-etu/login-etu.component';
import { LoginEnComponent } from './components/login-en/login-en.component';
import { EtudiantSpaceComponent } from './components/etudiant-space/etudiant-space.component';
import { LoginComponent } from './components/login/login.component';
import { AjoutrendezComponent } from './components/ajoutrendez/ajoutrendez.component';
import { AjouteComponent } from './components/ajoute/ajoute.component';
import { LinkDriveComponent } from './components/link-drive/link-drive.component';
import { UpdatteRendezComponent } from './components/updatte-rendez/updatte-rendez.component';
import { ListeJuryComponent } from './components/liste-jury/liste-jury.component';
import { RemarqComponent } from './components/remarq/remarq.component';
import { FormRemarqComponent } from './components/form-remarq/form-remarq.component';
import { AjouterNoteComponent } from './components/ajouter-note/ajouter-note.component';
import { ValiderEtudiantComponent } from './components/valider-etudiant/valider-etudiant.component';
import { EspaceDemandeComponent } from './components/espace-demande/espace-demande.component';
import { ValiderJeryComponent } from './components/valider-jery/valider-jery.component';
import { ListSujectComponent } from './components/list-suject/list-suject.component';
import { EspaceSujectComponent } from './components/espace-suject/espace-suject.component';
import { ListJerySujectComponent } from './components/list-jery-suject/list-jery-suject.component';
import { EspaceEtudiantSujectPasComponent } from './components/espace-etudiant-suject-pas/espace-etudiant-suject-pas.component';
import { ListSujectEnragistrerComponent } from './components/list-suject-enragistrer/list-suject-enragistrer.component';
import { SelectUniversiteComponent } from './components/select-universite/select-universite.component';
import { SelectEtablissementComponent } from './components/select-etablissement/select-etablissement.component';
import { ListSujecEtudiantNonComponent } from './components/list-sujec-etudiant-non/list-sujec-etudiant-non.component';
import { SelectDepartementComponent } from './components/select-departement/select-departement.component';
import { MonprojetComponent } from './components/monprojet/monprojet.component';
import { SelectioneComponent } from './components/selectione/selectione.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { FormAdminComponent } from './components/form-admin/form-admin.component';
import { ListEmailComponent } from './components/list-email/list-email.component';



@NgModule({
  declarations: [
    AppComponent,
    ShowAllComponent,
    UpdateComponent,
    TstComponent,
    CreateComponent,
    CreateListComponent,
    CreateencadrantComponent,
    UpdateEncadrantComponent,
    CreateEncadrantComponent,
    HomeComponent,
    ShowListComponent,
    InscrireComponent,
    EncadrantSpaceComponent,
    Enregistrerpo2Component,
    Enregistrerpo3Component,
    TestComponent,
    ShowCondaidatComponent,
    LoginEtuComponent,
    LoginEnComponent,
    EtudiantSpaceComponent,
    LoginComponent,
    AjoutrendezComponent,
    AjouteComponent,
    LinkDriveComponent,
    UpdatteRendezComponent,
    ListeJuryComponent,
    RemarqComponent,
    FormRemarqComponent,
    AjouterNoteComponent,
    ValiderEtudiantComponent,
    EspaceDemandeComponent,
    ValiderJeryComponent,
    ListSujectComponent,
    EspaceSujectComponent,
    ListJerySujectComponent,
    EspaceEtudiantSujectPasComponent,
    ListSujectEnragistrerComponent,
    SelectUniversiteComponent,
    SelectEtablissementComponent,
    ListSujecEtudiantNonComponent,
    SelectDepartementComponent,
    MonprojetComponent,
    SelectioneComponent,
    LoginAdminComponent,
    FormAdminComponent,
    ListEmailComponent,
  
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
