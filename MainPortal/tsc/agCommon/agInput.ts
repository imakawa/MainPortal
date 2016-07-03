
import { Component,Input,OnInit} from '@angular/core';

@Component({
  selector: 'agInput',
  template: `<input [(id)]="agMeta.agId" 
                    [(class)]="agMeta.agClass"
                    [(style)]="agMeta.agStyle"
                    [(name)]="agMeta.agName"
                    [(type)]="agMeta.agType" 
                    [(placeholder)]="agMeta.agPlaceHolder"
                    [(ngModel)]="agMeta.agValue"
                    (click)="agMeta.agClick()"
                    (keydown)="agMeta.agKeyDown()"
                    (keyup)="agMeta.agKeyUp()"
                    (mousedown)="agMeta.agMouseDown()"
                    (mouseup)="agMeta.agMouseUp()"/>`
})
export class agInput implements OnInit {
  @Input() agMeta: agInputMeta;
  @Input() agId: string;
  @Input() agClass: string;
  @Input() agStyle: string;
  @Input() agName: string;
  @Input() agType: string;
  @Input() agPlaceHolder: string;
  @Input() agValue: string;
  
  ngOnInit() {
      this.agMeta.agId = this.agId;
      this.agMeta.agClass = this.agClass;
      this.agMeta.agStyle = this.agStyle;
      this.agMeta.agName = this.agName;
      this.agMeta.agType = this.agType;
      this.agMeta.agPlaceHolder = this.agPlaceHolder;
      this.agMeta.agValue = this.agValue;
      this.agMeta.agInit();
  }
}

class agComponentMeta {
  public agId : string;
  public agClass : string;
  public agStyle : string;

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

enum agInputType{
  button = 0,
  checkbox,
  file,
  hidden,
  image,
  password,
  radio,
  reset,
  submit,
  text
}

export class agInputMeta extends agComponentMeta{
  public agType:string;
  public agValue:string;
  public agName:string;
  public agPlaceHolder:string;

  public agInit(){
    super.agInit();
    if(this.agType == undefined){this.agType=agInputType[agInputType.text]}
    if(this.agValue == undefined){this.agValue=""}
    if(this.agName == undefined){this.agName=""}
    if(this.agPlaceHolder == undefined){this.agPlaceHolder=""}
  }
}