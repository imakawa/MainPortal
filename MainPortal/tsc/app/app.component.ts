import { Component } from '@angular/core';
import { AnagetUser }    from './AnagetUser';
import { HeroService }    from './app.service';
import { JSONP_PROVIDERS }  from '@angular/http';
import { Observable }       from 'rxjs/Observable';
import { WikipediaService } from './wiki.service';
import {Http,HTTP_PROVIDERS} from '@angular/http';
import { LoginService } from './Login.Service';


@Component({
  selector: 'my-app',
  templateUrl: 'tsc/app/app.component.html',
  providers: [JSONP_PROVIDERS, HTTP_PROVIDERS,HeroService,LoginService]
})
export class AppComponent {
  
  http:Http;
  constructor (http:Http, private loginService:LoginService) {
    // this.http = http;
  }
  
  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  model = new AnagetUser(1, '','');

  submitted = false;
  
  heroes: AnagetUser[];
  errorMessage: string;
  
  items: Observable<string[]>;
  tasks:any = [];
    
  onSubmit() { 
    this.submitted = true; 
    // alert("123");
    //  this.items = this.wikipediaService.search("123");
    // this.model.name = "Executing";
    // this.model.pw = "Executing";
    // this.http.get('Home/GetData')
    //         //.map((res: Response) => res.json())

    //         //it is important to have this subscribe call, since the 
    //         //request is only made if there is a subscriber 
    //         .subscribe(res => this.tasks = res);
    //        if(this.tasks._body ="123456"){
    //          document.location.href = "Home/About";
    //        }
    
    this.loginService.AuthAnagetUser(this.model,this.subname);
    // if(this.loginService.GetIsSuccess()){
    //   console.log("res.json()");
    //   document.location.href = "/Home/About";
    // }
  }
  
  subname(data:any):void {
    if(<Boolean>data){
      document.location.href = "/Home/About";  
    }else{
      alert("ログイン検証失敗！");
    }
  }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  // Reset the form with a new hero AND restore 'pristine' class state
  // by toggling 'active' flag which causes the form
  // to be removed/re-added in a tick via NgIf
  // TODO: Workaround until NgForm has a reset method (#6822)
  active = true;

  // newHero() {
  //   this.model = new Hero(42, '', '');
  //   this.active = false;
  //   setTimeout(()=> this.active=true, 0);
  // }
  //////// NOT SHOWN IN DOCS ////////

  // Reveal in html:
  //   Name via form.controls = {{showFormControls(heroForm)}}
  // showFormControls(form:NgForm){

  //   return form && form.controls['name'] &&
  //   form.controls['name'].value; // Dr. IQ
  // }

  /////////////////////////////
 }