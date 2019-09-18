import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Services/service.service';
import { Router } from '@angular/router';
import { Api } from '../models/swagger.model'
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  api:Api;
  host:String;
  head:String[]=["Name" ];
  body:String[]=["Description"];

  constructor(private ssc: ServiceService, private router: Router) { }

  ngOnInit() {
    this.host=localStorage.getItem('host')
    this.ssc.getDetails(this.host).subscribe((data: Api) => {
      this.api = data
      console.log(this.api)
      this.objectToArray(this.api)
      console.log(this.head)
      });
  }
 objectToArray(api:any) {
  for(var x in api){
  try{
    if(this.isString(api[x])){
      if(x != "_id"){
        this.head.push(x)
        this.body.push(api[x])}
    }
    else{
      if(x=='0' || x=='1' || x=='2' ||x=='3' || x=='4' || x=='5' || x=='6'  ){
        console.log(x,"X is")
      }
      else{
        this.head.push(x)
        this.body.push(" ")
    }
      this.objectToArray(api[x])
    }
  }
  
  catch(err){
    console.log(err)
    }
  }
}
  
  isObj(x){
    if(typeof(x)=="object"){
      return true
    }
    else{
      return false
    }
  }
  isString(x){
    if(typeof(x)=="string" || typeof(x)=="number" || typeof(x)=="boolean"){
      return true
    }
    else{
      return false
    }
  }
}
