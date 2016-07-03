import { Component,OnInit } from '@angular/core';
import { JSONP_PROVIDERS }  from '@angular/http';
import { Employee } from './Employee';
import { Router} from '@angular/router-deprecated';

@Component({
  selector: 'HBBABA03',
  templateUrl: '/tsc/HBBABA/HBBABA.component.html'
})
export class HBBABAComponent implements OnInit {
  Employees: Employee[] = [
  { id: 11, name: 'Mr. Nice567' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];
  constructor (private router:Router) { 
	   
  }

//---------------------
  CreateData(){
	  this.router.navigate(['Create']);
  }

//---------------------
  EditData(){
	  $("#tblHeader").hide();
  this.Employees = [
  { id: 11, name: 'Mr. Nice5997' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];	  
  }

//---------------------
  DeleteData(){
	  $("#tblHeader").html("データを削除しました。");
	  $("#tblHeader").show();
	 this.Employees = [
  		{ id: 11, name: 'Mr. Nice123' },
  		{ id: 12, name: 'Narco123' }
	];
  }

//---------------------
  RefreshData(){
	  $("#tblHeader").html("最新のデータを取得しました。");
	  $("#tblHeader").show();
  }


  ngOnInit() {
    $("#tblHeader").hide();
  }


 }