import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Services/service.service';
//import { Distance } from '../models/distance.model';
import { Router } from '@angular/router';
import { CompService} from '../comp.service';

@Component({
  selector: 'app-droplocation',
  templateUrl: './droplocation.component.html',
  styleUrls: ['./droplocation.component.css']
})
export class DroplocationComponent implements OnInit {

  ngOnInit() {
  }
  
  
  constructor(private msg:CompService,private lsc:ServiceService, private route:Router ){  }
  

}
