import { Component, OnInit ,ViewChild } from '@angular/core';
import { Router} from '@angular/router';
import { ServiceService} from '../Services/service.service';
import { Taxi} from "../models/taxi.model";
import { MatSnackBar } from '@angular/material';
import { Basic} from '../models/distance.model';
import { MatSort,MatSortable,MatTableDataSource,matSnackBarAnimations } from '@angular/material';
import { Observable} from 'rxjs/Observable';
import { CompService} from '../comp.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {
  basic: Basic[];
  displayedColumns = ['Name','Host', 'Catogery', 'Version','actions'];

  constructor(private msg:CompService,private serv:ServiceService, private route:Router ,  private snackBar: MatSnackBar ) { }

  ngOnInit() {
    this.fetchC();
  }


  fetchC() {
    console.log("function called");
    this.serv
      .getBasic()
      .subscribe((data: Basic[]) => {
        this.basic = data;
        console.log('Data requested ...');
        console.log(this.basic)
        console.log("**********************************************************")
        for (let obj of data) {
          console.log("object:", obj);
          for (let key in obj) {
              console.log("      key:", key, "value:", obj[key]);
          }
      }
      console.log("**********************************************************")
      });
  }

  edit(id: any) {
    this.route.navigate([`./edit/${id}`]);
  }
  det(Host:any){
    localStorage.setItem('host',Host)
    this.route.navigate(['/confirm'])
  }


}
