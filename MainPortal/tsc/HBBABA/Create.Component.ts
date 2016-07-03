import { Component, OnInit} from '@angular/core';
import { Router} from '@angular/router-deprecated';
import { agInput,agInputMeta} from './agInput'

@Component({
  selector: 'CreateComponent',
  templateUrl: 'http://localhost/tsc/HBBABA/Create.Component.html',
  directives: [agInput]
})
export class CreateComponent implements OnInit {
    public loginId_Input:agInputMeta= new agInputMeta();
    
    constructor (private router:Router) {
    }

    ngOnInit() {
        //this.loginId_Input = new agInputMeta();
        this.loginId_Input.id="loginId_Input12345";
        this.loginId_Input.agMouseDown = function () {
        console.log(this.text);
        this.id="loginId_Input12345_MouseDown123";
        $("#q01").html("abcdefg");
        }
        this.loginId_Input.agMouseUp = function () {
            
        this.id="loginId_Input12345_MouseUp456";
        $("#q01").html("123456");
        }
        
    }

    backward(){ 
        //this.router.navigate(['HBBABA04']);
        this.loginId_Input.id="id_placeholder_changed1";
        console.log("esdeewew");
    }
    
    backward1(){
        $("#widgetbody").css("display","none");
    }
}