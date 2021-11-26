import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {

  constructor(private api:ApiService) { }
  
  myData:any
  sortOptions:any
  nameso(){
    this.sortOptions = { columns: [{ field: 'Name', direction: 'Ascending' }] };
  }

  ngOnInit(): void {
    this.api.getData().subscribe((data)=>{
      
     
      this.myData=data
    })
  }

}
