{}import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceService } from '../Services/service.service';
import { Api } from '../models/swagger.model';
import { copyStyles } from '@angular/animations/browser/src/util';
import { FormControl,FormGroup, FormBuilder, Validators , FormArray } from '@angular/forms';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.css']
})
export class AutoComponent implements OnInit {
  api: Api;
  array =["clientKey","ClientSecret"]
  grantForm: any[] = [];
  head: any[] = [];
  csForm:FormGroup;
  newFrom: FormGroup;
  form:FormGroup;
  display: Boolean = false;
  key:any;token:any;

  constructor(private fb: FormBuilder, private ssc: ServiceService, private router: Router) {
    this.csForm = this.fb.group({
      gType: [''],
    });
    
  }

  ngOnInit() {
    this.ssc.getDetails(localStorage.getItem('host')).subscribe((data: Api) => {
      this.api = data
      this.grantTypes()
    })
  }

  grantTypes() {
    for (var x in this.api["x-customAuth"].details) {
      this.head.push(this.api["x-customAuth"].details[x].grantType)
    }
    for (var x in this.api["x-customAuth"].details) {
      if ((this.api["x-customAuth"].details[x].grantType) == "password") {
        for (var i in this.api["x-customAuth"].details[x].parameters) {
          if (this.api["x-customAuth"].details[x].parameters[i].name != "GrantType")
            console.log("I is:", this.api["x-customAuth"].details[x].parameters[i].name)
        }
      }
    }
    
  }

  selectForm(type: String) {
    console.log("Fdasdsaadasadasdas")
    this.grantForm = [];
    for (var x in this.api["x-customAuth"].details) {
      if ((this.api["x-customAuth"].details[x].grantType) == type) {
        for (var i in this.api["x-customAuth"].details[x].parameters) {
          if (this.api["x-customAuth"].details[x].parameters[i].name != "GrantType") {
            console.log("I is:", this.api["x-customAuth"].details[x].parameters[i].name)
            this.grantForm.push(this.api["x-customAuth"].details[x].parameters[i].name)
            this.addToForm(this.api["x-customAuth"].details[x].parameters[i].name)
          }
        }
      }
    }
    this.display = true
  }


  addToForm(name){
    this.csForm.addControl(name, new FormControl('', Validators.required));
  }


  onSubmit(values: { clientKey: any; ClientSecret: any; gType: any; userName: any; password: any; }){
    console.log("Functiuon Called")
    console.log(values)
   /* this.ssc.gvcs(values.clientKey,values.ClientSecret,this.api["x-customAuth"].url,values.gType,values.userName,values.password)
    .subscribe(res=>{
      console.log(res)
      this.key = res
      console.log(res)
      this.token=this.key.access_token
    })*/
  }    
  /*builfForm(type){
    if(type){
      this.csForm = this.fb.group({
        gType: ['', Validators.required],
        details:this.fb.array([])
      });
    }
    /*
    if (type == "password") {
      this.csForm = this.fb.group({
        clientKey: ['', Validators.required],
        ClientSecret: ['', Validators.required],
        gType: [type, Validators.required],
        userName: ['', Validators.required],
        password: ['', Validators.required],
      });
    }
    else {
      this.csForm = this.fb.group({
        clientKey: ['', Validators.required],
        ClientSecret: ['', Validators.required],
        gType: [type, Validators.required],
      });
    }
    this.display = true;
  }
*/

/*
  addCreds(formFileds: any) {
    for(var i in formFileds){
    const creds = this.csForm.controls.credentials as FormArray;
    creds.push(this.fb.group({
      formFileds[i]: '',
    }));
  }
}*/
}
