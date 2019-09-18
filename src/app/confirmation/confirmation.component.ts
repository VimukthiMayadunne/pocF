import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceService } from '../Services/service.service';
import { MatSnackBar } from '@angular/material';
import { MatSort,MatSortable,MatTableDataSource,matSnackBarAnimations } from '@angular/material';
import { driver} from '../models/driver.model';
import { Api} from '../models/swagger.model';
import { copyStyles } from '@angular/animations/browser/src/util';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { e } from '@angular/core/src/render3';
import { isArray } from 'util';


@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  api: Api;host:string =null;info:any =null;tags:any=null;schemes:any=null;security:any;oid:any;
  paths:any =null;
  apis:object[];
  csForm: FormGroup;
  pgForm: FormGroup;
  key:any;
  deatils:any;
  url:any;
  grantType:any;
  token:string="Api key";

  constructor( private fb: FormBuilder, private route: ActivatedRoute ,private ssc: ServiceService, private router: Router ) { 
  // Client Sectret form
  this.csForm = this.fb.group({
    cs: ['', Validators.required],
    ck: ['',Validators.required],
    uName: ['', ],
    password: ['',],
  });

  // Password grant type form
  this.pgForm = this.fb.group({
    uName: ['', Validators.required],
    password: ['',Validators.required],
  });

}
  ngOnInit() {
    this.host=localStorage.getItem('host')
    this.ssc.getDetails(this.host).subscribe((data: Api) => {
      this.oid=data["_id"]
      this.api = data
      this.getData()
      console.log(data)
      console.log(this.api)
      });
  };

  getData(){
      this.info=JSON.stringify(this.api.info)
      this.tags=JSON.stringify(this.api.tags)
      this.schemes=JSON.stringify(this.api.schemes)
      this.paths=JSON.stringify(this.api.paths)
      this.deatils=JSON.stringify(this.api["x-customAuth"].details["0"].description)
      this.grantType=this.api["x-customAuth"].details["0"].grantType
      this.url=this.api['x-customAuth'].details["0"].url
      this.security=JSON.stringify(this.api.securityDefinitions)
  }
  gvpg(uName: any,password: any ) {
    this.ssc.gvpg(uName,password,this.api['x-customAuth'].details["0"].url).subscribe(res => {
      this.key = res
      console.log(res)
      this.token=this.key.access_token
    });
  }
  gvcs(ck,cs) {
    console.log("CK:",ck,"CS",cs)
    this.ssc.gvcs(ck,cs,this.url,this.grantType).subscribe(res => {
      this.key = res
      this.token=this.key.access_token
      console.log(res)
    });
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


