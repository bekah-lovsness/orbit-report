export class Satellite {

    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;
    showWarning:boolean;
    // evenRow: boolean;

    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean){
    this.name= name;
    this.type= type;
    this.launchDate = launchDate;
    this.orbitType = orbitType;
    this.operational = operational;
    this.showWarning = this.shouldShowWarning();
}

shouldShowWarning(){  
    if(this.type.toLowerCase() === 'space debris'){   
        return true;
    } else {
        return false;
    }
}
}


