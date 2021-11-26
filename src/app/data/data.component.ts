import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  myData:any
  constructor(private api:ApiService) { 
    
  }
  nameso(){
    this.myData=this.myData.sort(this.myData.name);
  }

  ngOnInit(): void {
    this.api.getData().subscribe((data)=>{
      console.log(data)
      this.myData=data;
    })
  }

}
