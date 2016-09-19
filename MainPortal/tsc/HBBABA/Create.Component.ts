import { Component, OnInit} from '@angular/core';
import { Router} from '@angular/router-deprecated';
import { agInput,agInputMeta} from 'agCommon';

@Component({
  selector: 'CreateComponent',
  templateUrl: '/tsc/HBBABA/Create.Component.html',
  directives: [agInput]
})
export class CreateComponent implements OnInit {
    public loginId_Input:agInputMeta= new agInputMeta();
    
    constructor (private router:Router) {
    }

    ngOnInit() {
        // this.loginId_Input.agClass="col-xs-10 col-sm-10";
    }

    backward(){ 
        //this.router.navigate(['HBBABA04']);
        //console.log(this.loginId_Input.agClass + "222");
    }
    
    backward1(){
        //$("#widgetbody").css("display","none");
    }
}