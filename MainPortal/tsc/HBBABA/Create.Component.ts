import { Component, OnInit} from '@angular/core';
import { Router} from '@angular/router-deprecated';
import { agInput,agInputMeta} from 'agCommon';

@Component({
  selector: 'CreateComponent',
  templateUrl: 'agCommon/Create.Component.html',
  directives: [agInput]
})
export class CreateComponent implements OnInit {
    public loginId_Input:agInputMeta= new agInputMeta();
    
    constructor (private router:Router) {
    }

    ngOnInit() {
    }

    backward(){ 
        //this.router.navigate(['HBBABA04']);
        console.log(this.loginId_Input.agClass);
    }
    
    backward1(){
        $("#widgetbody").css("display","none");
    }
}