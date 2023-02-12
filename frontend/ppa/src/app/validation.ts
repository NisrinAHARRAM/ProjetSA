import { Demandv } from "./demandv";
import { DriveLink } from "./driveLink";
import { Form } from "./form";
import { Groupe } from "./groupe";
import { Jery } from "./jery";
import { Liste } from "./liste";
import { Note } from "./note";
import { Publie } from "./publie";
import { Rendezvous } from "./rendezvous";

export class Validation {

    idv!: number;
    appogeT1!: number;
    appogeT2!: number;
    appogeT3!: number;
    nomET1!: string;
    nomET2!: string;
    nomET3!: string;
    liste!: Liste;
    demandvs !: Demandv[];
    rendez !: Rendezvous[];
    driveLinks!:DriveLink[];
    groupes!:Groupe[];
    jerys!:Jery[];
    forms!:Form[];
    notes!:Note[];
    publies!:Publie[];

}
