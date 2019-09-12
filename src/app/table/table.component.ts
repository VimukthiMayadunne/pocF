import { Component, OnInit } from '@angular/core';
import { JSONTableModule } from 'angular-json-table';
import { Router} from '@angular/router';
import { ServiceService} from '../Services/service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  
  dataFromServer: any =
  [{
    'id': 20,
    'someFeild1': 'asdfasdf',
    'someFeild2': 'asdf',
    'someFeild3': 'asdfasdfasfasdfa',
    },
   {
    'id': 81,
    'someFeild1': 'aasdfsdf',
    'someFeild2': 'asasdfdf',
    'someFeild3': 'dfasfasdfa',
    }, 
  ];

  constructor() { }

  ngOnInit() {
  }

  // [headers] are used to define the table head and show what are the feilds required.
customHeaders: any = {
  thead: ["."], // the Column Name in table head.
  displayed: ['someFeild1', 'someFeild2', 'someFeild3'] // the data it should populate in table.
};

// JSON data can be from any source just need an `id` in order to update and delete. 

  
  deleteByIdS(row){
      console.log(row); // Returns the row which is selected by clicking.
   }
   
  deleteByIdSi(ids){
      console.log(ids); // this function gives the ID of deleted rows.. as an array
  }
  
  updateChanges(row){
      console.log(row); // This return the row which is updated with the id.
  }

}

