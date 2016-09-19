export class agComponentMeta {
  private agId : string;
  public agClass : string;
  public agStyle : string;

  public getAgId(){return this.agId;}
  public setAgId(_agId:string){
      if(_agId == undefined){
        this.agId = "";    
      }else{
        this.agId = _agId + 'asdfasdf';
      }
  }

  agInit(){
    if (this.agId == undefined) { this.agId=""}
    if (this.agClass == undefined) { this.agClass=""}
    if (this.agStyle == undefined) { this.agStyle=""}
  }

  agClick(){  
    //console.log("Debug:agClick()");
  }
 
  agKeyDown(){
    //console.log("Debug:agKeyDown()");
  }

  agKeyUp(){
    //console.log("Debug:agKeyUp()");
  }

  agMouseDown(){
     //console.log("Debug:agMouseDown()");
  }

  agMouseUp(){
   //console.log("Debug:agMouseUp()");
  }
}