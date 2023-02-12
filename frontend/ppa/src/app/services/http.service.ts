import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Etudiant } from '../etudiant';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Liste } from '../liste';
import { Encadrant } from '../encadrant';
import { EnregistrerPo } from '../enregistrer-po';
import { Validation } from '../validation';
import { Demandv } from '../demandv';
import { Rendezvous } from '../rendezvous';
import { DriveLink } from '../driveLink';
import { Groupe } from '../groupe';
import { Jery } from '../jery';
import { Form } from '../form';
import { Note } from '../note';
import { Publie } from '../publie';
import { Admin } from '../admin';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  findCategory(category: any) {
    throw new Error('Method not implemented.');
  }

  private addListeUrl = "http://localhost:8095/Liste"
  private host13 = "http://localhost:8095/Groupe"
  private host7 = "http://localhost:8095/app"
  private host5 = "http://localhost:8095/Enregistrer"
  private host3 = "http://localhost:8095/val"
  private host6 = "http://localhost:8095/delte"

  url: string = "http://localhost:8095"
  url1: string = "http://localhost:8095/delte?id="
  url2: string="http://localhost:8095/find?id="
  private baseURL = "http://localhost:8095/employees"
  private base = "http://localhost:8095/employees"
  private baseURLE = "http://localhost:8095/encadrants"
  private host2 = "http://localhost:8095/enreg"
  private host8 = "http://localhost:8095/Validation"
  private host12 = "http://localhost:8095/appoge"
  private host10 = "http://localhost:8095/Rendez"
  private host9 = "http://localhost:8095/demand"
//////////
private host11 = "http://localhost:8095/DriveLink"
private host14 = "http://localhost:8095/encadrants"
private host15 = "http://localhost:8095/Jery"
private host16 = "http://localhost:8095/id"
private host18 = "http://localhost:8095/Form"
private host19 = "http://localhost:8095/ajout-note"
private host20 = "http://localhost:8095/Publie"
private host22 = "http://localhost:8095/Admin"
  constructor(private http: HttpClient) { }

  public fetchAll(): Observable<Etudiant[]> {
    return this.http.get<Etudiant[]>(this.url + "/etudiant");
  }
  public addEtudiant(etudiant: Etudiant) {
    return this.http.post<Etudiant>(this.url + "/etudiant", etudiant);
  }
  getEmployeesList(): Observable<Etudiant[]>{
    return this.http.get<Etudiant[]>(this.url + "/etudiant");
  }
 
  deleteEmployee(id: number): Observable<Object>{
    return this.http.delete(`${this.baseURL}/${id}`);
  }
/////////////////////////////////////////////////////////
  getEmployeeById(id: number): Observable<Etudiant>{
    return this.http.get<Etudiant>(`${this.baseURL}/${id}`);
  }

  updateEmployee(id: number, employee: Etudiant): Observable<Object>{
    return this.http.put(`${this.baseURL}/${id}`, employee);
  }
  ///////////////////
  // public findById(id: number) {
  //   return this.http.get<Etudiant>(this.url + '/findbyid/' + id);
  // }

  // public update(id: number, todo: Etudiant) {
  //   return this.http.put<Etudiant>(this.url + '/update/' + id, todo);
  // }
  createEmployee(employee: Etudiant): Observable<Object>{
    return this.http.post(`${this.base}`, employee);
  }

  addListe (liste: Liste): Observable<Liste> {
    return this.http.post<Liste>(this.addListeUrl, liste);
}


getEtudiants() {
  return this.http.get<Etudiant[]>(this.baseURL);
}

///////////////////// Partie encadrant //////////////////


public fetchAllEn(): Observable<Encadrant[]> {
  return this.http.get<Encadrant[]>(this.url + "/encadrants");
}
public addEncadrant(encadrant: Encadrant) {
  return this.http.post<Encadrant>(this.url + "/encadrants", encadrant);
}
getEncadrantsList(): Observable<Encadrant[]>{
  return this.http.get<Encadrant[]>(this.url + "/encadrants");
}

deleteEncadrant(id: number): Observable<Object>{
  return this.http.delete(`${this.baseURLE}/${id}`);
}
/////////////////////////////////////////////////////////
getEncadrantById(id: number): Observable<Encadrant>{
  return this.http.get<Encadrant>(`${this.baseURLE}/${id}`);
}

updateEncadrant(id: number, employee: Encadrant): Observable<Object>{
  return this.http.put(`${this.baseURLE}/${id}`, employee);
}

createEncadrant(employee: Encadrant): Observable<Object>{
  return this.http.post(`${this.baseURLE}`, employee);
}



getEncadrants() {
return this.http.get<Encadrant[]>(this.baseURLE);
}


public postData(value: Liste)  {
return this.http.post(this.addListeUrl,value);
}


getListeById(id: number): Observable<Liste>{
    return this.http.get<Liste>(`${this.addListeUrl}/${id}`);
  }
  public postD(value: EnregistrerPo):Observable<Object>  {
    return this.http.post(this.url+"/enregister",value);
  }

  public getAllListe(): Observable<Liste[]> {
    return this.http.get<Liste[]>(this.url + "/Liste");
  }

getenByapp(id: number): Observable<EnregistrerPo[]>{
  return this.http.get<EnregistrerPo[]>(`${this.host2}/${id}`);
}

public postDt(value: Validation):Observable<Object>  {
  return this.http.post(this.url+"/validation",value);
}
vaByapp(id: number): Observable<Validation[]>{
  return this.http.get<Validation[]>(`${this.host3}/${id}`);
}

deleteEn(id: number): Observable<Object>{
  return this.http.delete(`${this.host5}/${id}`);
}
deleteEnapp(id: number): Observable<Object>{
  return this.http.delete(`${this.host6}/${id}`);
}
enrstring(id: number): Observable<EnregistrerPo>{
  return this.http.get<EnregistrerPo>(`${this.host7}/${id}`);
}

public fetchre(): Observable<EnregistrerPo[]> {
  return this.http.get<EnregistrerPo[]>(this.url + "/Enregistrer");
}


getAppogeByEmail(email: string): Observable<any> {
  return this.http.get(`${this.host12}/${email}`);
}

vaByappstring(id: number): Observable<Validation>{
  return this.http.get<Validation>(`${this.host8}/${id}`);
}
public Adddem(value: Demandv):Observable<Object>  {
  return this.http.post(this.host9,value);
}
deletedm(id: number): Observable<Object>{
  return this.http.delete(`${this.host9}/${id}`);
}
///////////////
public addrendez(value: Rendezvous):Observable<Object>  {
  return this.http.post(this.host10,value);
}
delete(id: number): Observable<Object>{
  return this.http.delete(`${this.host10}/${id}`);
}
setData(idMatch:number){
  localStorage.setItem('idMatch',idMatch.toString());
}


///////////////////////////////

public addlink(value: DriveLink):Observable<Object>  {
  return this.http.post(this.host11,value);
}
getrendez(id: number): Observable<Rendezvous>{
    return this.http.get<Rendezvous>(`${this.host10}/${id}`);
  }
updateRendz(id: number, employee: Rendezvous): Observable<Object>{
    return this.http.put(`${this.host10}/${id}`, employee);
  }
///////////////////
public addgroup(etudiant: Groupe) {
  return this.http.post<Groupe>(this.host13, etudiant);
}
EncadrantById(id: number): Observable<Encadrant>{
  return this.http.get<Encadrant>(`${this.host14}/${id}`);
}
deletegroupe(id: number): Observable<Object>{
  return this.http.delete(`${this.host13}/${id}`);
}
public addjery(etudiant: Jery) {
  return this.http.post<Jery>(this.host15, etudiant);
}
public addfrom(etudiant: Form) {
  return this.http.post<Form>(this.host18, etudiant);
}
public addpublie(etudiant: Publie) {
  return this.http.post<Publie>(this.host20, etudiant);
}
public note(etudiant: Note) {
  return this.http.post<Note>(this.host19, etudiant);
}
getidByEmail(email: string): Observable<any> {
  return this.http.get(`${this.host16}/${email}`);
}
public fetchAllgroupe(): Observable<Groupe[]> {
  return this.http.get<Groupe[]>(this.host13);
}
public fetchAlljery(): Observable<Jery[]> {
  return this.http.get<Jery[]>(this.host15);
}

public addfromadm(etudiant: Admin) {
  return this.http.post<Admin>(this.host22, etudiant);
}
public fetchdomaine(): Observable<Admin[]> {
  return this.http.get<Admin[]>(this.host22);
}

}
