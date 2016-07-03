import { Injectable }     from '@angular/core';
import { Http,Response,Request, Jsonp, URLSearchParams} from '@angular/http';
import { AnagetUser } from './AnagetUser'
import { Subscription }     from 'rxjs/Subscription';

@Injectable()
export class LoginService {
    
    private isSuccess : any;
    public GetIsSuccess():Boolean{
        return <Boolean>this.isSuccess;
    }
    
    /**
     * コンストラクタ
     */
    constructor (private http:Http,private jsonp: Jsonp) {}
    
    /**
     * ユーザー情報を検証する 
     */
    public AuthAnagetUser(user:AnagetUser,exec:(data:any)=>void){
        this.http.request(new Request({
            method: "Get",
            url: "/Home/AuthAnagetUser",
            search:'user=' + JSON.stringify(user)
        })).subscribe((res: Response) => {
            //if(res.json()){
                exec(res.json());
            //}
    //         if(res.json()){
    //             //document.location.href = "/Home/About";
    // //             var ah = screen.availHeight - 30;  
    // //  var aw = screen.availWidth - 10;  
    // //  fulls += ",height=" + ah;  
    // //  fulls += ",innerHeight=" + ah;  
    // //  fulls += ",width=" + aw;  
    // //  fulls += ",innerWidth=" + aw;  
    // //  fulls += ",resizable"  
    //             //window.open ("/Home/About", "newwindow", "height=" + screen.availHeight + ", width="+ screen.availWidth +", left=0, top=0, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no")
    //         }
         });
    } 
  }