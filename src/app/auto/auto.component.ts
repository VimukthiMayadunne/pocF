{}import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceService } from '../Services/service.service';
import { Api } from '../models/swagger.model';
import { copyStyles } from '@angular/animations/browser/src/util';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.css']
})
export class AutoComponent implements OnInit {
  api: Api;
  grantForm: any[] = [];
  head: any[] = [];
  csForm:FormGroup;
  newFrom: FormGroup;
  display: Boolean = false;
  key:any;token:any;

  constructor(private fb: FormBuilder, private ssc: ServiceService, private router: Router) {

    this.csForm = this.fb.group({
      gType: ['', Validators.required],
    });

    this.newFrom = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
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
    this.grantForm = [];
    for (var x in this.api["x-customAuth"].details) {
      if ((this.api["x-customAuth"].details[x].grantType) == type) {
        for (var i in this.api["x-customAuth"].details[x].parameters) {
          if (this.api["x-customAuth"].details[x].parameters[i].name != "GrantType") {
            console.log("I is:", this.api["x-customAuth"].details[x].parameters[i].name)
            this.grantForm.push(this.api["x-customAuth"].details[x].parameters[i].name)
          }
        }
      }
    }
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

  onSubmit(values){
    console.log(values)
    this.ssc.gvcs(values.clientKey,values.ClientSecret,this.api["x-customAuth"].url,values.gType,values.userName,values.password)
    .subscribe(res=>{
      console.log(res)
      this.key = res
      console.log(res)
      this.token=this.key.access_token
    })
  }




}