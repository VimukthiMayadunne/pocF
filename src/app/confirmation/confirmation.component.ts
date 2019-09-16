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
  api: Api[];
  host:string =null;
  info:any =null;
  tags:any=null;
  schemes:any=null;
  paths:any =null;
  apis:object[];
  csForm: FormGroup;
  pgForm: FormGroup;
  key:any;
  token:string="Api key";

  constructor( private fb: FormBuilder, private route: ActivatedRoute ,private ssc: ServiceService, private router: Router ) { 
  
  this.csForm = this.fb.group({
    cs: ['', Validators.required],
    ck: ['',Validators.required]
  });
  this.pgForm = this.fb.group({
    uName: ['', Validators.required],
    password: ['',Validators.required],
  });

}
  ngOnInit() {
    this.host=localStorage.getItem('host')
    this.ssc.getDetails(this.host).subscribe((data: Api[]) => {
      this.api = data
      this.getData()
      console.log(data)
      });
  };

  getData(){
      this.info=JSON.stringify(this.api["0"].info)
      this.tags=JSON.stringify(this.api["0"].tags)
      this.schemes=JSON.stringify(this.api["0"].schemes)
      this.paths=JSON.stringify(this.api["0"].paths)
  }
  gvpg(uName: any,password: any) {
    this.ssc.gvpg(uName,password).subscribe(res => {
      this.key = res
      console.log(res)
      this.token=this.key.access_token
    });
  }
  gvcs({ ck, cs }: { ck: any; cs: any; }) {
    this.ssc.gvcs(ck,cs).subscribe(res => {
      this.key = res
      this.token=this.key.access_token
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

/*
  loop(ta) {
    for (let obj of ta) {
      for (let key in obj) {
        if(this.isString(obj[key]))
          console.log("key is:",key ,"obj is:",obj[key])
        else{
          for (let obj1 of obj[key]) {
            let key1:any
            for (key1 in obj1) {
              if(isArray(obj1[key1])){
                for(let i in obj1[key1]){
                  console.log(obj1[key1][i])
                }

              }
            if(this.isString(obj1[key1]))
                console.log("     key is:",key1 ,"obj is:",obj1[key1])
        }
        }
      }

    }
    
*/


  
}


