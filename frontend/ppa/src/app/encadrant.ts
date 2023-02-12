import { Groupe } from "./groupe";
import { Jery } from "./jery";
import { Liste } from "./liste";

export class Encadrant {
    id!:number;
    nom!:string;
    prenom!:string;
    email!:string;
    password!:string;
    departement!:string;
    listes !: Liste[];
    groupes!: Groupe[]
    jerys!: Jery[]
    enabled!:boolean;
}
