import {IOefening} from './IOefening';

export class WorkOutPlan{

    public Oefeningen:IOefening[];
    public Naam:string;
    public RustOefening:IOefening;

    constructor(){
        this.Oefeningen = [];
    }
}