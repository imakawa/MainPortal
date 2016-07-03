
import { Component,Input,OnInit} from '@angular/core';

@Component({
  selector: 'agInput',
  template: `<input id="{{place}}" 
                    type="text" 
                    placeholder="{{agMetaData.id}}"
                    [(ngModel)]="agMetaData.text"
                    class="col-xs-10 col-sm-10" 
                    (mousedown)="agMetaData.agMouseDown()"
                    (mouseup)="agMetaData.agMouseUp()"/>`
})
export class agInput implements OnInit {
  @Input() agMetaData: agInputMeta;
  @Input() agId: string;
  @Input() datamodel: string;
  @Input() agclass: string;
  @Input() agText: string;
  
  ngOnInit() {
      this.agMetaData.id = this.agId + "123";
      this.agMetaData.text = this.agText;
      console.log(this.agMetaData);
  }
}

class agComponentMeta {
  public id : string;
  public class : string;
  public style : string;
  public text: string;

  agMouseDown(){
     console.log("1111");
  }

  agMouseUp(){
   console.log("2222");
  }

  constructor(name:string){
    console.log(name);
  }
}

export class agInputMeta extends agComponentMeta{
  constructor(){
    super("Rhino");
  }
}