import { Encadrant } from "./encadrant";
import { EnregistrerPo } from "./enregistrer-po";
import { Etudiant } from "./etudiant";
import { Validation } from "./validation";

export class Liste {
    id!: number;
    sujet!: string;
    desc!: string;
    nbr!: string;
    encadrant!: Encadrant;
    enregistrers!:EnregistrerPo[];
    validations!: Validation[];
}